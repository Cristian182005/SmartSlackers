import json
from typing import AsyncGenerator

from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from llm_providers import get_provider
from mentor import get_mentor_info, build_system_message

router = APIRouter()


class MentorRequest(BaseModel):
    messages: list[dict[str, str]]
    careerId: str
    locale: str = "es"


async def stream_mentor_response(
    messages: list[dict[str, str]],
    career_id: str,
    locale: str = "es",
) -> AsyncGenerator[str, None]:
    mentor_info = get_mentor_info(career_id)
    system_msg = build_system_message(career_id, locale)

    yield f"data: {json.dumps({'mentor': mentor_info})}\n\n"

    api_messages = [{"role": "system", "content": system_msg}]
    for msg in messages:
        api_messages.append({"role": msg["role"], "content": msg["content"]})

    try:
        provider = get_provider()
        async for chunk in provider.chat_stream(api_messages):
            yield f"data: {json.dumps({'content': chunk})}\n\n"

        yield "data: [DONE]\n\n"

    except Exception as e:
        yield f"data: {json.dumps({'error': str(e)})}\n\n"
        yield "data: [DONE]\n\n"


@router.post("/api/mentor")
async def mentor_chat(req: MentorRequest):
    if not req.messages:
        raise HTTPException(status_code=400, detail="Messages cannot be empty")

    return StreamingResponse(
        stream_mentor_response(req.messages, req.careerId, req.locale),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )
