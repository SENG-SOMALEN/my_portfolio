<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { onClickOutside, useDark, useToggle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { Sun, Moon } from 'lucide-vue-next';

interface Language {
  code: 'kh' | 'en';
  label: string;
}

const { locale, t } = useI18n({ useScope: 'global' });

// ប្ដូរ path ទៅជា Anchor IDs (#)
const tabs = computed(() => [
  { label: t('nav.home'), path: '#home', id: 'home' },
  { label: t('nav.about'), path: '#about', id: 'about' },
  { label: t('nav.skills'), path: '#skill', id: 'skill' },
  { label: t('nav.projects'), path: '#project', id: 'project' },
  { label: t('nav.contact'), path: '#contact', id: 'contact' },
]);

const languages: Language[] = [
  { code: 'kh', label: 'Khmer' },
  { code: 'en', label: 'English' },
];

const activeSection = ref('home');
const menuOpen = ref(false);

const isDark = useDark({
    disableTransition: false,
});
const toggleDark = useToggle(isDark);

// Vue.js Style Circular Ripple View Transition
function toggleDarkMode() {
  const root = document.documentElement;
  root.classList.add('theme-transition');
  toggleDark();
  window.setTimeout(() => {
    root.classList.remove('theme-transition');
  }, 650);
}

const langOpen = ref(false);

const currentLang = ref<Language>(
  languages.find((l) => l.code === locale.value) || languages[1]
);

watch(locale, (newLoc) => {
  const found = languages.find((l) => l.code === newLoc);
  if (found) currentLang.value = found;
});

const langDropdownRef = ref<HTMLDivElement | null>(null);
const mobileMenuRef = ref<HTMLElement | null>(null);

onClickOutside(langDropdownRef, () => {
  langOpen.value = false;
});

onClickOutside(mobileMenuRef, () => {
  menuOpen.value = false;
});

function isActive(sectionId: string) {
  return activeSection.value === sectionId;
}

function selectLang(lang: Language) {
  currentLang.value = lang;
  locale.value = lang.code;
  localStorage.setItem('user-lang', lang.code);
  langOpen.value = false;
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const savedLang = localStorage.getItem('user-lang') as 'kh' | 'en' | null;
  if (savedLang) {
    locale.value = savedLang;
    currentLang.value = languages.find((l) => l.code === savedLang) || languages[1];
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 }
  );

  tabs.value.forEach((tab) => {
    const el = document.getElementById(tab.id);
    if (el) observer?.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <header
    ref="mobileMenuRef"
    class="fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950/70 backdrop-blur-md transition-all duration-300"
  >
    <div class="mx-auto grid h-14 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
      <!-- left: logo -->
      <a
        href="#home"
        class="group flex items-center gap-2 font-mono text-sm font-semibold text-slate-800 dark:text-slate-100 shrink-0 tracking-tight outline-none rounded-md focus-visible:ring-2 focus-visible:ring-emerald-500/40 dark:focus-visible:ring-emerald-400/40"
      >
        <div class="relative flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            class="text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
          >
            <path
              d="M4 2h6l3 3v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
              stroke="currentColor"
              stroke-width="1.3"
            />
            <path d="M9.5 2v3.5H13" stroke="currentColor" stroke-width="1.3" />
          </svg>
          <div class="absolute inset-0 bg-emerald-400/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <span class="text-emerald-500">&lt;</span>
        <span class="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">Seng Somalen</span>
        <span class="text-emerald-500">/&gt;</span>
      </a>

      <!-- center: desktop tabs -->
      <nav class="hidden h-full items-stretch justify-center md:flex" aria-label="Primary">
        <a
          v-for="tab in tabs"
          :key="tab.path"
          :href="tab.path"
          class="group relative flex h-full items-center gap-2.5 border-r border-slate-200/60 dark:border-slate-800/60 px-5 font-mono text-[13px] transition-all duration-200 first:border-l first:border-slate-200/60 dark:first:border-slate-800/60 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500/40 dark:focus-visible:ring-emerald-400/40"
          :class="
            isActive(tab.id)
              ? 'bg-slate-100/70 dark:bg-slate-900/80 text-emerald-600 dark:text-emerald-400 font-medium'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-900/30'
          "
        >
          <span class="relative flex h-2 w-2">
            <span
              v-if="isActive(tab.id)"
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            />
            <span
              class="relative inline-flex rounded-full h-2 w-2 transition-colors duration-200"
              :class="isActive(tab.id) ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-slate-300 dark:bg-slate-800 group-hover:bg-slate-500 dark:group-hover:bg-slate-400'"
            />
          </span>

          {{ tab.label }}

          <span
            v-if="isActive(tab.id)"
            class="absolute inset-x-0 top-0 h-[2px] bg-emerald-500 dark:bg-emerald-400 shadow-[0_2px_8px_rgba(52,211,153,0.8)]"
          />
          <span
            v-else
            class="absolute inset-x-0 bottom-0 h-[2px] bg-emerald-400/0 group-hover:bg-emerald-500/40 dark:group-hover:bg-emerald-400/40 transition-all duration-200"
          />
        </a>
      </nav>

      <!-- mobile trigger -->
      <button
        type="button"
        class="flex items-center justify-self-center gap-2 rounded-lg border border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/50 px-3.5 py-1.5 font-mono text-[13px] text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-slate-200/50 dark:hover:bg-slate-900 transition-all duration-200 active:scale-95 md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        @click="menuOpen = !menuOpen"
      >
        <span class="text-emerald-600 dark:text-emerald-400 font-bold">&gt;_</span>
        <span>{{ menuOpen ? 'close' : 'menu' }}</span>
      </button>

      <!-- right: utility icons -->
      <div class="flex items-center gap-2 justify-self-end">
        <!-- dark mode toggle -->
          <button
            type="button"
            role="switch"
            :aria-checked="isDark"
            aria-label="Toggle dark mode"
            class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-500 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:bg-slate-700/80 hover:bg-slate-300 dark:hover:bg-slate-700"
            @click="toggleDarkMode()"
          >
                <!-- Moving circle indicator -->
              <span
                class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-500 ease-in-out dark:bg-slate-900 dark:translate-x-5"
              >
                <!-- Sun icon -->
                <span
                  class="absolute inset-0 flex h-full w-full items-center justify-center transition-all duration-500 ease-in-out
                        opacity-100 rotate-0 scale-100
                        dark:opacity-0 dark:-rotate-90 dark:scale-0"
                >
                  <Sun class="h-3 w-3 text-amber-500" />
                </span>

                <!-- Moon icon -->
                <span
                  class="absolute inset-0 flex h-full w-full items-center justify-center transition-all duration-500 ease-in-out
                        opacity-0 rotate-90 scale-0
                        dark:opacity-100 dark:rotate-0 dark:scale-100"
                >
                  <Moon class="h-3 w-3 text-emerald-400" />
                </span>
              </span>
          </button>

        <!-- language dropdown -->
        <div ref="langDropdownRef" class="relative">
          <button
            type="button"
            class="flex h-8 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/50 px-2.5 text-slate-600 dark:text-slate-400 transition-all duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 active:scale-95"
            :aria-expanded="langOpen"
            aria-haspopup="listbox"
            aria-label="Select language"
            @click="langOpen = !langOpen"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
            <span class="font-mono text-[12px]">{{ currentLang.code.toUpperCase() }}</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              class="transition-transform duration-200"
              :class="langOpen ? 'rotate-180' : ''"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="transform -translate-y-1 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-1 opacity-0"
          >
            <ul
              v-if="langOpen"
              role="listbox"
              class="absolute right-0 top-10 w-32 overflow-hidden rounded-lg border border-slate-200/70 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-xl"
            >
              <li
                v-for="lang in languages"
                :key="lang.code"
                role="option"
                :aria-selected="currentLang.code === lang.code"
                class="flex cursor-pointer items-center justify-between px-3.5 py-2.5 font-mono text-[13px] transition-colors"
                :class="
                  currentLang.code === lang.code
                    ? 'text-emerald-600 dark:text-emerald-400 bg-slate-100/70 dark:bg-slate-950/50 font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-950/30'
                "
                @click="selectLang(lang)"
              >
                {{ lang.label }}
                <span
                  v-if="currentLang.code === lang.code"
                  class="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_6px_#34d399]"
                />
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>

    <!-- mobile panel -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <nav
        v-if="menuOpen"
        id="mobile-nav"
        class="border-t border-slate-200/70 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-lg md:hidden shadow-xl"
        aria-label="Primary Mobile"
      >
        <a
          v-for="tab in tabs"
          :key="tab.path"
          :href="tab.path"
          class="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/40 px-5 py-3.5 font-mono text-[13px] transition-colors"
          :class="isActive(tab.id) ? 'text-emerald-600 dark:text-emerald-400 bg-slate-100/70 dark:bg-slate-950/50 font-medium' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-slate-950/30'"
          @click="menuOpen = false"
        >
          <span
            class="h-2 w-2 rounded-full"
            :class="isActive(tab.id) ? 'bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-300 dark:bg-slate-800'"
          />
          {{ tab.label }}
        </a>

        <!-- mobile language switch -->
        <div class="flex items-center gap-2 px-5 py-3.5">
          <span class="font-mono text-[12px] text-slate-500">Language:</span>
          <button
            v-for="lang in languages"
            :key="lang.code"
            type="button"
            class="rounded-md border px-2.5 py-1 font-mono text-[12px] transition-colors"
            :class="
              currentLang.code === lang.code
                ? 'border-emerald-500/50 dark:border-emerald-400/50 text-emerald-600 dark:text-emerald-400 bg-slate-100/70 dark:bg-slate-950/50'
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100'
            "
            @click="selectLang(lang)"
          >
            {{ lang.label }}
          </button>
        </div>
      </nav>
    </transition>
  </header>
</template>