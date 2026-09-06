<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })

interface Props {
  name?: string
  location?: string
  headlineLines?: string[]
  subhead?: string
  stack?: string[]
}

const props = defineProps<Props>()

const name = computed(() => props.name || t('hero.name'))
const location = computed(() => props.location || t('hero.location'))
const headlineLines = computed(() => props.headlineLines || (tm('hero.headline') as string[]))
const subhead = computed(() => props.subhead || t('hero.subhead'))
const stack = computed(() => props.stack || ['Vue', 'TypeScript', 'Tailwind CSS'])
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
    <!-- background subtle glow -->
    <div
      class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/5 blur-[120px]"
    />

    <div class="mx-auto max-w-6xl w-full px-4 sm:px-6">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <!-- left: text content -->
        <div class="animate-fade-up flex flex-col items-center lg:items-start text-center lg:text-left">
          <!-- Subtitle / Sub-header tag -->
          <p class="mb-4 font-mono text-sm tracking-wide text-slate-700 dark:text-slate-400 font-medium">
            <span class="text-emerald-600 dark:text-emerald-400 font-semibold">//</span> {{ name }} — {{ location }}
          </p>

          <!-- Main Headline -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight text-slate-900 dark:text-slate-100">
            <span v-for="(line, i) in headlineLines" :key="i" class="flex items-baseline justify-center lg:justify-start gap-3 sm:gap-4">
              <!-- Line index 01, 02, 03 -->
              <span
                class="select-none font-mono text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500 tabular-nums w-5 sm:w-6 shrink-0 text-right"
                aria-hidden="true"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span>
                {{ line }}
                <span v-if="i === headlineLines.length - 1"
                  class="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#34d399] animate-blink"
                  aria-hidden="true" />
              </span>
            </span>
          </h1>

          <!-- Paragraph text -->
          <p class="mt-4 sm:mt-5 max-w-md text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {{ subhead }}
          </p>

          <!-- Action buttons -->
          <div class="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <router-link to="/projects"
              class="group relative inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950 px-5 sm:px-6 py-2.5 font-mono text-sm font-semibold shadow-lg shadow-emerald-500/25 dark:shadow-emerald-400/20 transition-all duration-200 hover:bg-emerald-600 dark:hover:bg-emerald-500 active:scale-95">
              {{ $t('hero.btnWork') }}
            </router-link>

            <router-link to="/contact"
              class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-slate-100/80 text-slate-800 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-100 px-5 sm:px-6 py-2.5 font-mono text-sm font-medium transition-all duration-200 hover:border-emerald-500/50 hover:bg-slate-200/60 hover:text-emerald-700 dark:hover:border-emerald-400/40 dark:hover:bg-slate-900 dark:hover:text-emerald-400 active:scale-95">
              {{ $t('hero.btnContact') }}
            </router-link>
          </div>
        </div>

        <!-- right: floating code card -->
        <div class="flex justify-center animate-fade-up mt-4 lg:mt-0" style="animation-delay: 150ms">
          <div
            class="group relative w-full max-w-[340px] xl:w-[350px] overflow-hidden rounded-xl border border-slate-300 bg-white/80 dark:border-slate-800 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 dark:hover:border-emerald-400/30">
            <!-- Window header -->
            <div
              class="flex items-center justify-between border-b border-slate-200 bg-slate-100/80 dark:border-slate-800/80 dark:bg-slate-950/50 px-4 py-2.5">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-red-500/70 border border-red-500/90" />
                <span class="h-3 w-3 rounded-full bg-amber-500/70 border border-amber-500/90" />
                <span class="h-3 w-3 rounded-full bg-emerald-500/70 border border-emerald-500/90" />
              </div>
              <span class="font-mono text-xs text-slate-500 dark:text-slate-400/70">hero.vue</span>
            </div>

            <!-- Code view syntax styling -->
            <pre class="overflow-x-auto p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed"><code><span class="text-slate-400 dark:text-slate-400/60">&lt;script setup lang="ts"&gt;</span>
<span class="text-emerald-600 dark:text-emerald-400 font-medium font-semibold">const</span> <span class="text-slate-800 dark:text-slate-100">developer</span> = {
  <span class="text-amber-600 dark:text-amber-400">name</span>: <span class="text-emerald-600 dark:text-emerald-500">'{{ name }}'</span>,
  <span class="text-amber-600 dark:text-amber-400">focus</span>: <span class="text-emerald-600 dark:text-emerald-500">'Full Stack Developer'</span>,
  <span class="text-amber-600 dark:text-amber-400">stack</span>: [
  <span class="text-emerald-600 dark:text-emerald-500">    'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'PHP',
      'Laravel,
      'MySQL'</span>
  ],
  <span class="text-amber-600 dark:text-amber-400">available</span>: <span class="text-emerald-600 dark:text-emerald-400">true</span>,
};
<span class="text-slate-400 dark:text-slate-400/60">&lt;/script&gt;</span></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>