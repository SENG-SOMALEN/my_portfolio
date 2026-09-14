<script setup lang="ts">
import { ref, computed } from 'vue';
import { skills } from '../data/skills';
import type { SkillCategory } from '../types/skill';
import SkillBadge from '../components/SkillBadge.vue';

// បន្ថែម 'Database' ចូលត្រង់នេះ
const categories: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'UX & UI', 'Tools & DevOps']
const selectedCategory = ref<string>('All')

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'All') return skills
  return skills.filter(skill =>
    skill.category.toLowerCase() === selectedCategory.value.toLowerCase()
  )
})
</script>

<template>
  <section id="skill" class="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
    <!-- Section heading -->
    <div class="mb-10">
      <p class="mb-3 font-mono text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
        <span class="font-semibold">//</span> Tech Stack
      </p>
      <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        Skills &amp; Technologies
      </h1>
    </div>

    <!-- Filter pills -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        type="button"
        @click="selectedCategory = 'All'"
        class="rounded-lg px-4 py-2 font-mono text-sm font-medium transition-all duration-200 active:scale-95"
        :class="
          selectedCategory === 'All'
            ? 'bg-emerald-500 dark:bg-emerald-400 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20 dark:shadow-emerald-400/20'
            : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:text-emerald-700 dark:hover:text-emerald-400'
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
            : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:text-emerald-700 dark:hover:text-emerald-400'
        "
      >
        {{ cat }}
      </button>
    </div>

    <!-- Empty state -->
    <div
      v-if="filteredSkills.length === 0"
      class="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 py-16 text-center"
    >
      <span class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </span>
      <p class="text-slate-500 dark:text-slate-400 font-mono text-sm">
        No skills found for this category.
      </p>
    </div>

    <!-- Skill grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <SkillBadge
        v-for="item in filteredSkills"
        :key="item.id || item.name"
        :skill="item"
      />
    </div>
  </section>
</template>