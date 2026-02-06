
export interface CurriculumItem {
  id: string;
  title: string;
  description: string;
  lessons: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
