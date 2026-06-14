import { useState, useEffect, useCallback } from "react";
import { generateTest, careerResults } from "@/lib/questions";
import type { Question } from "@/lib/questions";
import type { Career } from "@/types/avatar";

export const TEST_SESSION_KEY = "vocatio_test_session";
export const QUESTIONS_SESSION_KEY = "vocatio_test_questions";

export function useTestLogic() {
  const [phase, setPhase] = useState<
    "intro" | "question" | "feedback" | "result"
  >("intro");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);

  const nextQuestion = () => {
    if (current + 1 >= currentQuestions.length) {
      setPhase("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTimeLeft(20);
      setPhase("question");
    }
  };

  const handleTimeout = () => {
    setAnswers((prev) => [...prev, "none"]);
    setTimeout(() => nextQuestion(), 1000);
  };

  useEffect(() => {
    if (phase !== "question") return;
    if (timeLeft === 0) {
      handleTimeout();
      return;
    }
    const t = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase]);

  // Persiste progreso y preguntas actuales mientras el test está activo
  useEffect(() => {
    if (phase !== "question" && phase !== "feedback") return;
    if (answers.length === 0 && current === 0) return;
    localStorage.setItem(
      TEST_SESSION_KEY,
      JSON.stringify({ answers, current, score, savedAt: Date.now() }),
    );
    if (currentQuestions.length > 0) {
      localStorage.setItem(QUESTIONS_SESSION_KEY, JSON.stringify(currentQuestions));
    }
  }, [answers, current, score, phase, currentQuestions]);

  // Inicia un test nuevo: genera 10 preguntas aleatorias del pool de 30
  const startTest = () => {
    localStorage.removeItem(TEST_SESSION_KEY);
    localStorage.removeItem(QUESTIONS_SESSION_KEY);
    const newQs = generateTest();
    setCurrentQuestions(newQs);
    localStorage.setItem(QUESTIONS_SESSION_KEY, JSON.stringify(newQs));
    setAnswers([]);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setPhase("question");
    setTimeLeft(20);
  };

  // Retoma un test guardado, restaurando las mismas preguntas que se usaron
  const resumeTest = (
    savedAnswers: string[],
    savedCurrent: number,
    savedScore: number,
  ) => {
    try {
      const raw = localStorage.getItem(QUESTIONS_SESSION_KEY);
      const savedQs: Question[] = raw ? JSON.parse(raw) : generateTest();
      setCurrentQuestions(savedQs);
    } catch {
      setCurrentQuestions(generateTest());
    }
    setAnswers(savedAnswers);
    setCurrent(savedCurrent);
    setScore(savedScore);
    setSelected(null);
    setPhase("question");
    setTimeLeft(20);
  };

  const handleAnswer = useCallback(
    (optionId: string) => {
      if (selected) return;
      setSelected(optionId);

      const chosenOption = currentQuestions[current]?.options.find(
        (o) => o.id === optionId,
      );
      if (chosenOption) {
        setAnswers((prev) => [...prev, chosenOption.career]);
      }

      const bonus = Math.floor(timeLeft * 5);
      setScore((prev) => prev + 100 + bonus);
      setPhase("feedback");
      setTimeout(() => nextQuestion(), 1500);
    },
    // nextQuestion re-creates each render; including it would cause stale closure
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected, timeLeft, current, currentQuestions],
  );

  const getResult = () => {
    const valid = answers.filter((a) => a !== "none");

    if (valid.length < 3) {
      return {
        insufficient: true,
        answered: valid.length,
        careerKey: "" as Career,
      };
    }

    const count: Record<string, number> = {};
    valid.forEach((career) => {
      count[career] = (count[career] || 0) + 1;
    });
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    const winner = sorted[0][0];
    const total = valid.length;

    const ranking = sorted.slice(0, 2).map(([key, cnt]) => ({
      careerKey: key as Career,
      percentage: Math.round((cnt / total) * 100),
      title: careerResults[key]?.title ?? key,
      color: careerResults[key]?.color ?? "#999",
      emoji: careerResults[key]?.emoji ?? "🎓",
    }));

    return {
      ...careerResults[winner],
      careerKey: winner as Career,
      insufficient: false,
      ranking,
    };
  };

  return {
    phase,
    current,
    selected,
    timeLeft,
    score,
    answers,
    question: currentQuestions[current],
    total: currentQuestions.length || 10,
    startTest,
    resumeTest,
    handleAnswer,
    getResult,
  };
}
