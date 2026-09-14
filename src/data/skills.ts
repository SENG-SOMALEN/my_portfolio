import type { Skill } from "../types/skill";

export const skills: Skill[] = [
    {
        id: 'vue',
        name: 'Vue 3',
        category: 'Frontend',
        icon: 'logos:vue',
        level: 'Intermediate',
        isFeatured: true,
        progress: 50
    },

    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Frontend',
        icon: 'logos:typescript-icon',
        level: 'Learning',
        isFeatured: true,
        progress: 28,
    },

    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'logos:tailwindcss-icon',
        level: 'Intermediate',
        isFeatured: true,
        progress: 67,
    },

    {
        id: 'html',
        name: 'HTML',
        category: 'Frontend',
        icon: 'logos:html-5',
        level: 'Intermediate',
        isFeatured: false,
        progress: 75,
    },

    {
        id: 'css',
        name: 'CSS',
        category: 'Frontend',
        icon: 'logos:css-3',
        level: 'Intermediate',
        isFeatured: false,
        progress: 75,
    },

    {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Frontend',
        icon: 'logos:javascript',
        level: 'Intermediate',
        isFeatured: false,
        progress: 60,
    },

    {
        id: 'php',
        name: 'PHP',
        category: 'Backend',
        icon: 'logos:php',
        level: 'Intermediate',
        isFeatured: true,
        progress: 50,
    },

    {
        id: 'laravel',
        name: 'Laravel',
        category: 'Backend',
        icon: 'logos:laravel',
        level: 'Intermediate',
        isFeatured: true,
        progress: 50,
    },

    {
        id: 'java',
        name: 'Java',
        category: 'Backend',
        icon: 'logos:java',
        level: 'Learning',
        isFeatured: false,
        progress: 31,
    },

    {
        id: 'figma',
        name: 'Figma',
        category: 'UX & UI',
        icon: 'logos:figma',
        level: 'Intermediate',
        isFeatured: false,
        progress: 50
    },

    {
        id: 'git',
        name: 'Git & GitHub',
        category: 'Tools & DevOps',
        icon: 'logos:git-icon',
        level: 'Intermediate',
        isFeatured: false,
        progress: 50
    },
    {
        id: 'mysql',
        name: 'MySQL',
        category: 'Database',
        icon: 'logos:mysql',
        level: 'Learning',
        isFeatured: false,
        progress: 45
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'Database',
        icon: 'logos:postgresql',
        level: 'Learning',
        isFeatured: false,
        progress: 20,
    },
];
