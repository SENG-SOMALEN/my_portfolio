<script setup lang="ts">
import { Icon } from '@iconify/vue'

const currentYear = new Date().getFullYear()

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skill' },
    { name: 'Projects', href: '#project' },
    { name: 'Contact', href: '#contact' },
]

const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/SENG-SOMALEN',
      icon: 'lucide:github',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Sengsomalen',
      icon: 'logos:telegram',
    },
    {
      name: 'Email',
      href: 'mailto:sengsomalen.info@gmail.com',
      icon: 'lucide:mail',
    },
]
</script>

<template>
  <footer class="relative border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0b0f17] transition-colors duration-300">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/50">

        <!-- Left: Logo & Status -->
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <a href="#home" class="font-mono text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
            <span class="text-emerald-500">&lt;</span>
            <span>Seng Somalen</span>
            <span class="text-emerald-500">/&gt;</span>
          </a>

          <span class="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>

          <!-- Available for work badge -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for hire
          </div>
        </div>

        <!-- Center: Quick Nav Links -->
        <ul class="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-600 dark:text-slate-400">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- Right: Social Icons -->
        <div class="flex items-center gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :title="social.name"
            class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            <Icon :icon="social.icon" class="h-4 w-4" />
          </a>
        </div>
      </div>

        <!-- Bottom Copyright & Credit -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-500">
            <p>© {{ currentYear }} Seng Somalen. All rights reserved.</p>
            <p class="flex items-center gap-1.5">
                Built with
                <span class="text-emerald-500 dark:text-emerald-400 font-medium">Vue 3</span>,
                <span class="text-blue-500 dark:text-blue-400 font-medium">TypeScript</span>
                &amp;
                <span class="text-sky-500 dark:text-sky-400 font-medium">Tailwind CSS</span>
            </p>
        </div>
    </div>
  </footer>
</template>