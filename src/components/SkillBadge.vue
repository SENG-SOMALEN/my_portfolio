<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import type { Skill } from '../types/skill';

const props = defineProps<{
  skill: Skill
}>();


const levelScore = computed(() => {
  switch (props.skill.level) {
    case 'Beginner': return 1;
    case 'Intermediate': return 2;
    case 'Advanced': return 3;
    case 'Expert': return 4;
    default: return 0;
  }
});


const levelBadgeClass = computed(() => {
    switch (props.skill.level) {
      case 'Beginner':
        return 'bg-slate-500/10 text-slate-400 dark:group-hover:bg-slate-200 dark:group-hover:text-slate-700';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-500 dark:text-blue-400 dark:group-hover:bg-blue-100 dark:group-hover:text-blue-700';
      case 'Advanced':
        return 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 dark:group-hover:bg-emerald-100 dark:group-hover:text-emerald-700';
      case 'Expert':
        return 'bg-purple-500/10 text-purple-500 dark:text-purple-400 dark:group-hover:bg-purple-100 dark:group-hover:text-purple-700';
      default:
        return 'bg-slate-500/10 text-slate-400';
    }
});
</script>

<template>
  <div
    class="group relative flex h-32 flex-col items-center justify-between p-4 transition-all duration-200
           bg-slate-50/70 hover:bg-white
           dark:bg-[#1a1a1a] dark:hover:bg-slate-100"
  >
    <!-- Top Right: Level Badge -->
    <span
      v-if="skill.level"
      class="absolute top-2.5 right-2.5 rounded px-1.5 py-0.5 font-mono text-[10px] uppercase font-semibold transition-colors duration-200"
      :class="levelBadgeClass"
    >
      {{ skill.level }}
    </span>

    <!-- Middle: Icon & Name -->
    <div class="flex flex-col items-center gap-2 mt-3">
      <Icon
        :icon="skill.icon"
        class="h-8 w-8 text-slate-700 transition-all duration-200
               dark:text-slate-400 dark:filter dark:grayscale dark:opacity-80
               dark:group-hover:grayscale-0 dark:group-hover:opacity-100 dark:group-hover:text-slate-900"
      />
      <span
        class="text-sm font-semibold text-slate-800 transition-colors duration-200
               dark:text-slate-300 dark:group-hover:text-slate-900"
      >
        {{ skill.name }}
      </span>
    </div>

    <!-- Bottom: Level Dots Indicator -->
    <div v-if="skill.level" class="flex items-center gap-1.5 mb-1" title="Skill Level">
      <span
        v-for="i in 4"
        :key="i"
        class="h-1.5 rounded-full transition-all duration-200"
        :class="[
          i <= levelScore
            ? 'w-3 bg-slate-400/30 dark:bg-slate-700 group-hover:bg-emerald-500 dark:group-hover:bg-slate-900'
            : 'w-1.5 bg-slate-200/50 dark:bg-slate-800/60 group-hover:bg-slate-200 dark:group-hover:bg-slate-300'
        ]"
      />
    </div>
  </div>
</template>