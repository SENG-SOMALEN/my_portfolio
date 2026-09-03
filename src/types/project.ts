// Category (Filter)
export type ProjectCategory = 'Web App' | 'Mobile App' | 'UI/UX Design' | 'API/Backend';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  images?: string[];
  category: ProjectCategory;
  technologies: string[];

  // Links Demo and Code
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;

  isFeatured?: boolean;
  completedAt?: string;
}