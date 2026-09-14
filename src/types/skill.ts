export type SkillCategory = 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Soft Skills' | 'UX & UI' | 'Database';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Learning';

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    icon: string;
    level?: SkillLevel;
    progress?: number;
    yearsOfExperience?: number;
    isFeatured?: boolean;
}