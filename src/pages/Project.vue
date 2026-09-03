<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import type { ProjectCategory } from '../types/project'
import ProjectCard from '../components/ProjectCard.vue'

const categories: ProjectCategory[] = ['Web App', 'Mobile App', 'UI/UX Design', 'API/Backend']
const selectedCategory = ref<string>('All')

// Filter Category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <section id="project" class="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
    <!-- Header (Follows Skill.vue design) -->
    <div class="mb-10">
      <p class="mb-3 font-mono text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
        <span class="font-semibold">//</span> Featured Works
      </p>
      <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        Projects &amp; Work
      </h1>
    </div>

    <!-- Category Filter Buttons (Follows Skill.vue design) -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        type="button"
        @click="selectedCategory = 'All'"
        class="rounded-lg px-4 py-2 font-mono text-sm font-medium transition-all duration-200 active:scale-95"
        :class="
          selectedCategory === 'All'
            ? 'bg-emerald-500 dark:bg-emerald-400 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20 dark:shadow-emerald-400/20'
            : 'border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:text-emerald-700 dark:hover:text-emerald-400'
        "
      >
        All
      </button>

      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        @click="selectedCategory = cat"
        class="rounded-lg px-4 py-2 font-mono text-sm font-medium transition-all duration-200 active:scale-95"
        :class="
          selectedCategory === cat
            ? 'bg-emerald-500 dark:bg-emerald-400 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20 dark:shadow-emerald-400/20'
            : 'border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:text-emerald-700 dark:hover:text-emerald-400'
        "
      >
        {{ cat }}
      </button>
    </div>

    <!-- Project Grid Container -->
    <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="item in filteredProjects"
        :key="item.id"
        :project="item"
      />
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 py-16 text-center"
    >
      <p class="text-slate-500 dark:text-slate-400 font-mono text-sm">
        No projects found for this category.
      </p>
    </div>
  </section>
</template>