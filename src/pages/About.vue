<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import malen from '../assets/somalen.jpg'

// Import Icons ពី lucide-vue-next
import {
    GraduationCap,
    ArrowRight,
    Mail,
    Github
} from 'lucide-vue-next';

const { t } = useI18n({ useScope: 'global' });

</script>

<template>
    <section class="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
        <!-- Section heading -->
        <div class="mb-14 text-center md:text-left">
            <p class="mb-3 font-mono text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                <span class="font-semibold">//</span> Profile
            </p>
            <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                {{ t('about.title') }}
            </h1>
        </div>

        <!-- Profile & Bio -->
        <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8 items-stretch mb-16">
            <!-- Image Profile -->
            <div class="relative mx-auto md:mx-0 w-44 md:w-full">
                <div class="w-44 md:w-64 h-full rounded-2xl overflow-hidden border-2 border-emerald-500/50 dark:border-emerald-400/70 shadow-[0_0_30px_rgba(16,185,129,0.12)] dark:shadow-[0_0_30px_rgba(52,211,153,0.22)] transition-shadow duration-300">
                    <img :src="malen" alt="Seng Somalen" class="w-full h-full object-cover object-top" />
                </div>
                <!-- availability badge -->
                <div
                    class="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 shadow-sm">
                    <span class="relative flex h-1.5 w-1.5">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                        <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span class="font-mono text-[11px] text-slate-600 dark:text-slate-300">Available</span>
                </div>
            </div>

            <!-- Bio -->
            <div
                class="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/50 p-6 sm:p-8 shadow-sm dark:shadow-lg backdrop-blur-sm flex items-center">
                <p class="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {{ t('about.bio') }}
                </p>
            </div>
        </div>

        <!-- Education Section -->
        <div class="mb-16">
            <!-- Section Title -->
            <h2 class="flex items-center gap-3 text-2xl font-semibold mb-8 text-slate-900 dark:text-white">
                <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
                    <GraduationCap class="w-5 h-5" />
                </span>
                {{ t('about.education') }}
            </h2>

            <!-- Timeline -->
            <div
                class="relative pl-8 space-y-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-emerald-400 before:via-emerald-300 before:to-slate-300 dark:before:from-emerald-500 dark:before:via-emerald-400 dark:before:to-slate-700">
                <!-- ================= University ================= -->
                <div class="relative group">
                    <!-- Timeline Dot -->
                    <span
                        class="absolute -left-8 top-5 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15 dark:ring-emerald-400/15 transition-all duration-300 group-hover:scale-125 group-hover:ring-8 group-hover:ring-emerald-400/20"></span>

                    <!-- Card -->
                    <div
                        class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-md p-5 sm:p-6 shadow-sm dark:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)] dark:hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]">
                        <!-- Hover Glow -->
                        <div
                            class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        </div>

                        <!-- Header -->
                        <div class="relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p
                                    class="font-semibold text-lg text-emerald-600 dark:text-emerald-300 transition-colors duration-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-200">
                                    {{ t('about.university') }}
                                </p>
                                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Software Development
                                </p>
                            </div>

                            <span
                                class="self-start sm:self-auto rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-300 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/60">
                                2024 - Present
                            </span>
                        </div>

                        <!-- Description -->
                        <p class="relative mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            Currently studying software development with a focus on web development, programming and
                            modern technologies.
                        </p>

                        <!-- Buttons -->
                        <div class="relative mt-5 flex flex-wrap gap-3">
                            <button
                                class="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20">
                                Read More
                                <ArrowRight class="w-4 h-4" />
                            </button>

                            <button
                                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300">
                                <Mail class="w-4 h-4" />
                                Contact
                            </button>

                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900">
                                <Github class="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <!-- ================= DUC University ================= -->
                <div class="relative group">
                    <span
                        class="absolute -left-8 top-5 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15 dark:ring-emerald-400/15 transition-all duration-300 group-hover:scale-125 group-hover:ring-8 group-hover:ring-emerald-400/20"></span>

                    <div
                        class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/40 backdrop-blur-md p-5 sm:p-6 shadow-sm dark:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)]">
                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="font-semibold text-lg text-emerald-600 dark:text-emerald-300">
                                    {{ t('about.universityOld') }}
                                </p>
                                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Web Development
                                </p>
                            </div>

                            <span
                                class="self-start sm:self-auto rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                                2023 - 2024
                            </span>
                        </div>

                        <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            Studied web development fundamentals and modern frontend development technologies.
                        </p>

                        <div class="mt-5 flex flex-wrap gap-3">
                            <button
                                class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20">
                                Read More
                                <ArrowRight class="w-4 h-4" />
                            </button>

                            <button
                                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-500">
                                <Mail class="w-4 h-4" />
                                Contact
                            </button>

                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900">
                                <Github class="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <!-- ================= High School ================= -->
                <div class="relative group">
                    <span
                        class="absolute -left-8 top-5 h-3.5 w-3.5 rounded-full bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-400/10 dark:ring-slate-600/10 transition-all duration-300 group-hover:scale-125"></span>

                    <div
                        class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50/80 dark:bg-slate-800/30 backdrop-blur-md p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_15px_40px_rgba(16,185,129,0.10)]">
                        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="font-semibold text-lg text-slate-600 dark:text-slate-300">
                                    {{ t('about.highSchool') }}
                                </p>
                                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    High School
                                </p>
                            </div>

                            <span
                                class="self-start sm:self-auto rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700/40 px-3 py-1 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                                Graduated 2023
                            </span>
                        </div>

                        <p class="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            Completed high school education and developed an early interest in technology and
                            programming.
                        </p>

                        <div class="mt-5 flex flex-wrap gap-3">
                            <button
                                class="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
                                Read More
                                <ArrowRight class="w-4 h-4" />
                            </button>

                            <button
                                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-500">
                                <Mail class="w-4 h-4" />
                                Contact
                            </button>

                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 transition-all duration-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900">
                                <Github class="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>