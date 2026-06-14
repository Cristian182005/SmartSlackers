# VocatioAI

Plataforma web de orientación vocacional para estudiantes de la Universidad Tecnológica del Perú (UTP). Combina tests vocacionales, IA generativa, simulaciones de carrera, comunidad, gamificación y análisis de habilidades.

## Características

- **Test Vocacional** — 10 preguntas con análisis IA de compatibilidad de carreras
- **Explorador de Carreras** — 20+ carreras con filtros por área, timeline "un día en la vida"
- **Simulaciones Interactivas** — 9 simulaciones con narrativas ramificadas (medicina, software, derecho, arquitectura, astronauta, marketing, gastronomía, ingeniería civil, psicología)
- **Mentor IA** — 6 personas especializadas con streaming SSE (Groq Llama 3.3 70B)
- **Comunidad** — Posts, likes, comentarios, filtros por carrera
- **Gamificación** — Sistema de badges y XP (10 badges, 5 categorías)
- **Perfil** — Historial de tests, intereses, skill assessment, skill gap dashboard, logros, roadmap de admisión
- **Internacionalización** — Español, inglés, quechua (Runasimi)
- **Roadmaps Visuales** — Visualización de trayectoria de carrera con ReactFlow

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| UI | shadcn/ui (base-nova), Framer Motion, Lucide React |
| Backend | FastAPI, Python 3.10+, Uvicorn |
| Base de datos | Cloud Firestore |
| Autenticación | Firebase Auth (email/password) + cookie session |
| IA | Groq API (Llama 3.3 70B), soporte OpenAI/Ollama |
| Fonts | Geist Sans + Geist Mono |

## Estructura del Proyecto

```
SmartSlackers/
├── frontend/                  # Next.js 16 + React 19
│   ├── app/                   # App Router (pages, routes, API)
│   │   ├── components/        # Componentes compartidos (Navbar, avatares, tests)
│   │   ├── api/               # API routes (análisis de carreras)
│   │   ├── perfil/            # Perfil de usuario (sidebar, secciones)
│   │   └── simular/           # 9 simulaciones de carrera
│   ├── components/            # shadcn/ui + componentes globales
│   ├── lib/                   # Utilidades, datos de carreras, i18n, API client
│   ├── locales/               # Traducciones (es.json, en.json, qu.json)
│   ├── src/                   # Firebase config, hooks, servicios
│   │   ├── firebase/          # Config Firebase (auth, db, storage)
│   │   ├── hooks/             # Custom hooks (useSimulationBadge)
│   │   └── services/          # Auth, avatar, badge, simulation, tutorial
│   └── types/                 # Definiciones TypeScript
├── backend/                   # FastAPI Python
│   ├── main.py                # Entry point, CORS, includes
│   ├── mentor_router.py       # AI Mentor chat (SSE streaming)
│   ├── community_router.py    # Posts, likes, comentarios
│   ├── badges_router.py       # Gamificación (badges, XP, leaderboard)
│   ├── llm_providers.py       # Abstracción LLM (Groq, OpenAI, Ollama)
│   ├── firestore_service.py   # CRUD Firestore
│   ├── scraper.py             # Scraper de mallas curriculares UTP
│   └── careers.py             # Catálogo de 38 carreras UTP
└── README.md
```

## Inicio Rápido

### Prerrequisitos

- Node.js 18+
- Python 3.10+
- Firebase project con `serviceAccountKey.json` en `backend/`
- Groq API key (gratis en console.groq.com)

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local   # o crear manualmente
npm run dev
```

### Backend

**Windows (CMD):**
```bash
cd backend
start.bat
```

**Windows (PowerShell):**
```powershell
cd backend
.\start.ps1
```

**Linux / macOS:**
```bash
cd backend
chmod +x start.sh
./start.sh
```

**Manual:**
```bash
cd backend
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

La API estará en http://localhost:8000. Documentación Swagger en http://localhost:8000/docs.

## Variables de Entorno

### Frontend (.env.local)

| Variable | Descripción |
|----------|------------|
| `NEXT_PUBLIC_MENTOR_API_URL` | URL del backend (default: `http://127.0.0.1:8000`) |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |
| `GROQ_API_KEY` | Groq API key (para análisis de carreras) |

### Backend (.env)

| Variable | Descripción |
|----------|------------|
| `LLM_PROVIDER` | Proveedor IA: `groq`, `openai`, o `ollama` |
| `LLM_MODEL` | Modelo (default: `llama-3.3-70b-versatile`) |
| `LLM_API_KEY` | API key del proveedor seleccionado |
| `OLLAMA_BASE_URL` | URL de Ollama (default: `http://localhost:11434/`) |
| `LLM_TEMPERATURE` | Temperatura (default: `0.8`) |
| `LLM_MAX_TOKENS` | Max tokens (default: `800`) |
| `API_SECRET_KEY` | API key para middleware de autenticación |

> El backend también requiere `serviceAccountKey.json` en `backend/` para Firebase Admin SDK.

## API Endpoints

### Rutas Frontend

| Ruta | Descripción |
|------|------------|
| `/` | Landing page |
| `/login` | Login y registro |
| `/avatar-setup` | Configurador de avatar (primera vez) |
| `/test` | Test vocacional |
| `/carreras` | Explorador de carreras |
| `/carreras/[id]` | Detalle de carrera |
| `/simular` | Hub de simulaciones |
| `/simular/[career]` | Simulación interactiva |
| `/mentor` | Mentor IA |
| `/comunidad` | Foro comunitario |
| `/perfil` | Perfil de usuario |
| `/roadmap` | Roadmap visual de carrera |
| `/recursos` | Recursos y admisión |

### Backend API

| Método | Ruta | Descripción |
|--------|------|------------|
| GET | `/api/health` | Health check |
| GET | `/api/v2/careers` | Lista de carreras (Firestore) |
| GET | `/api/v2/careers/{id}` | Detalle de carrera |
| POST | `/api/mentor` | Chat Mentor IA (SSE streaming) |
| GET | `/api/community/posts` | Posts de la comunidad |
| POST | `/api/community/posts` | Crear post |
| POST | `/api/community/posts/{id}/like` | Toggle like |
| GET | `/api/community/posts/{id}/comments` | Comentarios |
| POST | `/api/community/posts/{id}/comments` | Agregar comentario |
| GET | `/api/badges/definitions` | Definiciones de badges |
| GET | `/api/badges/user/{id}` | Badges del usuario |
| POST | `/api/badges/track` | Registrar evento y otorgar badges |
| GET | `/api/badges/leaderboard` | Leaderboard de XP |

## Firebase

### Servicios Utilizados

| Servicio | Uso |
|----------|-----|
| **Firebase Auth** | Autenticación email/password |
| **Cloud Firestore** | Base de datos principal |
| **Firebase Storage** | Almacenamiento de avatares |

### Colecciones Firestore

| Colección | Propósito |
|-----------|----------|
| `Usuarios` | Perfiles de usuario |
| `Carreras` | Catálogo de carreras |
| `avatars` | Configuraciones de avatar |
| `Posts` | Posts de la comunidad |
| `UserBadges` | Badges desbloqueados por usuario |
| `UserStats` | Estadísticas de actividad |
| `SimulationResults` | Resultados de simulaciones |
| `historialTests` | Historial de tests vocacionales |
| `UserSkills` | Habilidades evaluadas por usuario |

## Autenticación

1. Usuario se registra o inicia sesión en `/login` con email/password
2. Se crea cookie `vocatio_session={uid}` (7 días expiración, SameSite=Lax)
3. Usuarios nuevos → `/avatar-setup`; existentes → `/`
4. `proxy.ts` verifica la cookie — usuarios no autenticados → `/login`

**Rutas públicas:** `/`, `/carreras`, `/login`

## Arquitectura IA

### Mentor IA
- Backend FastAPI streaming respuestas vía Server-Sent Events (SSE)
- 6 personas especializadas según carrera (Software, Medicina, Derecho, Marketing, Psicología, Ingeniería Civil)
- Proveedor configurable: Groq (default), OpenAI, Ollama

### Análisis de Carreras
- Next.js API route llama a Groq directamente desde el servidor
- Analiza intereses del usuario y recomienda carreras con explicaciones personalizadas

## Gamificación

| Badge | Categoría | XP | Condición |
|-------|----------|-----|-----------|
| Primera Vez | Test | 50 | Completar primer test |
| Explorador | Exploración | 75 | Explorar 3 carreras |
| Explorador Experto | Exploración | 150 | Explorar 8 carreras |
| Corazón Generoso | Comunidad | 75 | Crear primer post |
| Comentarista | Comunidad | 75 | Primer comentario |
| Popular | Comunidad | 150 | 5 likes en posts |
| Activo | Comunidad | 100 | 3 posts + 3 comentarios |
| Simulador | Simulación | 100 | Completar primera simulación |
| Pionero | Simulación | 200 | Completar 3 simulaciones |
| Mentor | Aprendizaje | 100 | 5 sesiones con mentor IA |

## Internacionalización

- **Español (es)** — Idioma principal
- **Inglés (en)** — English
- **Quechua (qu)** — Runasimi

## Licencia

Proyecto académico — Hackathon SmartSlackers
