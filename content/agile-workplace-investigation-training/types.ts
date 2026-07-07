export type SeedQuestionType = "multiple_choice" | "short_answer";

export type SeedQuestion = {
  type: SeedQuestionType;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  needsReview: boolean;
};

export type SeedLessonKind =
  | "lecture"
  | "scenario"
  | "failure_points"
  | "knowledge_check"
  | "capstone_briefing"
  | "capstone_assignment"
  | "final_assessment";

export type SeedLesson = {
  kind: SeedLessonKind;
  title: string;
  bodyMarkdown?: string;
  questions?: SeedQuestion[];
};

export type SeedModule = {
  title: string;
  lessons: SeedLesson[];
};
