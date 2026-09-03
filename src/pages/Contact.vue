<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const copied = ref(false)
const email = 'sengsomalen.info@gmail.com'

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const contactLinks = [
  {
    name: 'Email',
    value: 'sengsomalen.info@gmail.com',
    href: `mailto:${email}`,
    icon: 'lucide:mail',
    description: 'Send me a direct email anytime.',
    isCopyable: true,
  },
  {
    name: 'Telegram',
    value: '@Sengsomalen',
    href: 'https://t.me/Sengsomalen',
    icon: 'logos:telegram',
    description: 'For quick chats or immediate inquiries.',
    isCopyable: false,
  },
  {
    name: 'GitHub',
    value: 'SENG-SOMALEN',
    href: 'https://github.com/SENG-SOMALEN',
    icon: 'lucide:github',
    description: 'Explore my source code and projects.',
    isCopyable: false,
  },
]
</script>

<template>
  <main id="contact" class="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
    <!-- Header -->
    <div class="mb-12">
      <p class="mb-3 font-mono text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
        <span class="font-semibold">//</span> Get In Touch
      </p>
      <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        Contact Me
      </h1>
      <p class="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
        Feel free to reach out if you have questions, project proposals, or potential collaboration opportunities!
      </p>
    </div>

    <!-- Contact Cards Grid (Vue Sponsor Style) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <div
        v-for="item in contactLinks"
        :key="item.name"
        class="group relative flex flex-col justify-between p-6 rounded-2xl
               border border-slate-200 dark:border-slate-800
               bg-slate-50/50 dark:bg-[#0b0f17]
               transition-all duration-300
               hover:-translate-y-1 hover:border-emerald-500/40
               hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)]"
      >
        <div>
          <!-- Icon & Name -->
          <div class="flex items-center gap-3 mb-4">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 group-hover:border-emerald-500/40 transition-colors">
              <Icon :icon="item.icon" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-bold text-slate-900 dark:text-white">
                {{ item.name }}
              </h3>
              <p class="font-mono text-xs text-slate-500 dark:text-slate-400">
                {{ item.value }}
              </p>
            </div>
          </div>

          <p class="text-xs text-slate-500 dark:text-slate-400 mb-6">
            {{ item.description }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <a
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-800
                   px-4 py-2 font-mono text-xs font-medium text-slate-700 dark:text-slate-300 bg-transparent
                   transition-all duration-300
                   hover:bg-emerald-500 hover:text-slate-950 hover:border-transparent"
          >
            <span>Connect</span>
            <Icon icon="lucide:arrow-up-right" class="h-3.5 w-3.5" />
          </a>

          <!-- Copy Email Button -->
          <button
            v-if="item.isCopyable"
            @click="copyEmail"
            type="button"
            title="Copy Email"
            class="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-800
                   p-2 text-slate-700 dark:text-slate-300 bg-transparent
                   transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <Icon :icon="copied ? 'lucide:check' : 'lucide:copy'" class="h-4 w-4" :class="{ 'text-emerald-500': copied }" />
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Callout Card -->
    <div class="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 p-8 text-center">
      <p class="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">
        // Open for Opportunities
      </p>
      <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Have a project in mind?
      </h2>
      <p class="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6">
        I am always open to discussing new development projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <a
        :href="`mailto:${email}`"
        class="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-mono text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 active:scale-95"
      >
        <Icon icon="lucide:send" class="h-4 w-4" />
        <span>Send Message</span>
      </a>
    </div>
  </main>
</template>