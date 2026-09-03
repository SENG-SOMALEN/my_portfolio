export type SkillCategory = 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Soft Skills' | 'UX & UI';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    icon: string;
    level?: SkillLevel;
    yearsOfExperience?: number;
    isFeatured?: boolean;
}