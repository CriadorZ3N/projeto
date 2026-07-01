export interface Lead {
  id: string;
  name: string;
  email: string;
  jobTitle: string;
  company?: string;
  invisibleCostScore: number; // calculated from the interactive test
  registeredAt: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    text: string;
    points: number;
    description?: string;
  }[];
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  formerJob: string;
  currentStatus: string;
  quote: string;
  avatarSeed: string;
}
