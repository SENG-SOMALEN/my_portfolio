<script setup lang="ts">
import { watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import AnimatedBg from './components/AnimatedBg.vue';

const { locale } = useI18n({ useScope: 'global' });

watchEffect(() => {
  document.documentElement.setAttribute('lang', locale.value)
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f17] dark:text-slate-100">
    <AnimatedBg />

    <div>
      <router-view />
    </div>
  </div>
</template>
