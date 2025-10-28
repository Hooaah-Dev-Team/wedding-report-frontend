export type QuestionType = "text" | "rating" | "choice";

export interface SurveyQuestion {
  id: number;
  question: string;
  category: string;
  subCategory?: string;
  type?: QuestionType;
  options?: string[];
  image?: string | { male: string; female: string };
}

export interface SurveyPart {
  partNumber: number;
  title: string;
  description: string;
  questions: SurveyQuestion[];
  totalQuestions: number;
  totalPages: number;
}

export interface SurveyData {
  parts: SurveyPart[];
  totalQuestions: number;
}

export interface SurveyAnswer {
  questionId: number;
  answer: string | number;
}

export interface SurveyResponse {
  answers: SurveyAnswer[];
  completedAt: Date;
}
