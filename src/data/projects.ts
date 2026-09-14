import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: 'portfolio-website',
        title: 'Personal Developer Portfolio',
        description: 'A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS.',
        coverImage: '/portfolio.png',
        category: 'Web App',
        technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
        liveUrl: 'https://sengsomalen-portfolio.vercel.app/',
        githubUrl: 'https://github.com/username/my-portfolio',
        isFeatured: true,
        completedAt: '2026-01'
    },
    {
        id: 'e-commerce',
        title: 'Web E-Commerce (front)',
        description: 'Front-end UX/UI',
        coverImage: '/e-commerce.png',
        category: 'Web App',
        technologies: ['Vue 3', 'Pinia', 'Tailwind CSS'],
        liveUrl: 'https://e-commerceetec.vercel.app/',
        githubUrl: 'https://github.com/bunnengmach090524-Lang/Demo_E-Commerce',
        isFeatured: true,
        completedAt: '2025-11'
    },
    {
        id: 'project-management',
        title: 'Project Management Sytem',
        description: 'Front-end and Back-end RESTful API',
        coverImage: '/project-management.png',
        category: 'Web App',
        technologies: ['Vue-3', 'TyScript', 'Tailwind CSS', 'Laravel-10', 'MySQL'],
        liveUrl: 'https://pms-net.vercel.app',
        githubUrl: 'https://github.com/SENG-SOMALEN/Project_Management_System',
        isFeatured: true,
        completedAt: '2026-09'
    }
];