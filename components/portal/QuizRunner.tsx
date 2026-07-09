"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export type QuizQuestion = {
  id: string;
  type: "multiple_choice" | "short_answer";
  prompt: string;
  options: string[] | null;
};

export function QuizRunner({
  lessonId,
  questions,
  isFinalAssessment,
}: {
  lessonId: string;
  questions: QuizQuestion[];
  isFinalAssessment: boolean;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    score: number;
    results: Record<string, boolean | null>;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/quiz/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, answers }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong submitting your answers.");
      setSubmitting(false);
      return;
    }

    setResult({ score: data.score, results: data.results });
    setSubmitting(false);
    router.refresh();
  }

  if (result) {
    const mcQuestions = questions.filter((q) => q.type === "multiple_choice");
    return (
      <div className="fact-box" style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 8 }}>
          {mcQuestions.length > 0 ? `Score: ${result.score}%` : "Submitted"}
        </h3>
        {isFinalAssessment && mcQuestions.length > 0 && (
          <p style={{ color: result.score >= 70 ? "#1E7A3E" : "#B3261E", marginBottom: 12 }}>
            {result.score >= 70
              ? "You passed the final assessment."
              : "You did not reach the 70% passing score. You can retake this assessment."}
          </p>
        )}
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {questions.map((q, i) => {
            const isCorrect = result.results[q.id];
            return (
              <li key={q.id} style={{ fontSize: 14.5 }}>
                {q.type === "multiple_choice" ? (
                  <span style={{ color: isCorrect ? "#1E7A3E" : "#B3261E" }}>
                    {isCorrect ? "✓" : "✗"}
                  </span>
                ) : (
                  <span style={{ color: "var(--slate)" }}>—</span>
                )}{" "}
                Q{i + 1}: {q.prompt}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 24 }}>
      {questions.map((q, i) => (
        <div key={q.id} className="fact-box">
          <p style={{ fontWeight: 700, marginBottom: 10 }}>
            Q{i + 1}: {q.prompt}
          </p>
          {q.type === "multiple_choice" && q.options ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {q.options.map((opt, optIndex) => (
                <label key={optIndex} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 15 }}>
                  <input
                    type="radio"
                    name={q.id}
                    value={optIndex}
                    required
                    checked={answers[q.id] === String(optIndex)}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          ) : (
            <textarea
              rows={4}
              value={answers[q.id] ?? ""}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                fontFamily: "inherit",
                fontSize: 15,
              }}
              placeholder="Your reflection (not graded)"
            />
          )}
        </div>
      ))}
      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
      <button type="submit" className="btn" disabled={submitting}>
        {submitting ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
