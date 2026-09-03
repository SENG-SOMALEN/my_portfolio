import type { Skill } from "../types/skill";

export const skills: Skill[] = [
    {
        id: 'vue',
        name: 'Vue 3',
        category: 'Frontend',
        icon: 'logos:vue',
        level: 'Intermediate',
        isFeatured: true,
    },

    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Frontend',
        icon: 'logos:typescript-icon',
        level: 'Beginner',
        isFeatured: true,
    },

    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'logos:tailwindcss-icon',
        level: 'Intermediate',
        isFeatured: true,
    },

    {
        id: 'html',
        name: 'HTML',
        category: 'Frontend',
        icon: 'logos:html-5',
        level: 'Intermediate',
        isFeatured: false,
    },

    {
        id: 'css',
        name: 'CSS',
        category: 'Frontend',
        icon: 'logos:css-3',
        level: 'Intermediate',
        isFeatured: false,
    },

    {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Frontend',
        icon: 'logos:javascript',
        level: 'Intermediate',
        isFeatured: false,
    },

    {
        id: 'php',
        name: 'PHP',
        category: 'Backend',
        icon: 'logos:php',
        level: 'Intermediate',
        isFeatured: true,
    },

    {
        id: 'laravel',
        name: 'Laravel',
        category: 'Backend',
        icon: 'logos:laravel',
        level: 'Intermediate',
        isFeatured: true,
    },

    {
        id: 'python',
        name: 'Python',
        category: 'Backend',
        icon: 'logos:python',
        level: 'Beginner',
        isFeatured: false,
    },

    {
        id: 'figma',
        name: 'Figma',
        category: 'UX & UI',
        icon: 'logos:figma',
        level: 'Intermediate',
        isFeatured: false,
    },

    {
        id: 'git',
        name: 'Git & GitHub',
        category: 'Tools & DevOps',
        icon: 'logos:git-icon',
        level: 'Intermediate',
        isFeatured: false,
    },
];
