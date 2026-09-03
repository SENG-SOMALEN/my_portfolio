<script setup lang="ts">
import { Eye } from 'lucide-vue-next';
import { Icon } from '@iconify/vue';
import type { Project } from '../types/project';

defineProps<{
  project: Project
}>();
</script>

<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-2xl
           border border-slate-200 dark:border-slate-800
           bg-white dark:bg-[#0b0f17]
           shadow-sm transition-all duration-300
           hover:-translate-y-1 hover:border-emerald-500/40
           hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]"
  >
    <!-- Subtle Glow Ring on Hover -->
    <div
      class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full
             bg-emerald-500/5 blur-3xl opacity-0
             transition-opacity duration-500 group-hover:opacity-100"
    />

    <!-- Project Thumbnail -->
    <div class="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900/60">
      <img
        :src="project.coverImage"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0b0f17] via-transparent to-transparent opacity-80" />
    </div>

    <div class="relative flex flex-grow flex-col p-5 sm:p-6">
      <!-- Title: Keep simple white/slate on hover -->
      <h3 class="mb-4 flex-grow text-xl font-bold text-slate-900 dark:text-white">
        {{ project.title }}
      </h3>

      <!-- Tech Stack Badges: Outlined style (like "Get in touch" btn) -->
      <div class="mb-6 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full border border-slate-300 dark:border-slate-800 bg-transparent
                 px-3 py-1 font-mono text-xs font-medium text-slate-600 dark:text-slate-300
                 transition-colors duration-200"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-sm">
        <!-- View Button: Dimmed/Reduced color when card is hovered -->
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 px-4 py-2.5
                 /* Default state: Solid Green */
                 bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20
                 /* Hover state on card: Reduced color/opacity */
                 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border group-hover:border-emerald-500/30 group-hover:shadow-none
                 /* Direct Hover on button: Back to highlighted */
                 hover:!bg-emerald-500 hover:!text-slate-950 hover:!border-transparent hover:!shadow-lg hover:!shadow-emerald-500/20"
        >
          <Eye class="h-4 w-4" />
          View
        </a>

        <!-- GitHub Button -->
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-800
                 px-4 py-2.5 font-medium text-slate-700 dark:text-slate-300 bg-transparent
                 transition-all duration-300
                 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
          :class="project.liveUrl ? '' : 'flex-1'"
        >
          <Icon icon="simple-icons:github" class="h-4 w-4" />
          <span v-if="!project.liveUrl">GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>