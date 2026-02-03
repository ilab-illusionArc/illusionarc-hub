<script setup lang="ts">
import { useTenantSeo } from '~/composables/useTenantSeo'
const { canonical } = useTenantSeo()

useHead(() => ({
  link: [{ rel: 'canonical', href: canonical.value }],
  meta: [
    { property: 'og:url', content: canonical.value }
  ]
}))
</script>

<template>
  <div style="font-family: system-ui;">
    <header style="padding: 16px 24px; border-bottom: 1px solid #eee;">
      <nav style="display:flex; gap:12px; align-items:center;">
        <a href="https://iforge.illusionarc.com/" style="text-decoration:none;">Main</a>
        <a href="https://ilab.illusionarc.com/" style="text-decoration:none;">iLab</a>
        <a href="https://itoon.illusionarc.com/" style="text-decoration:none;">iToon</a>
        <a href="https://ispark.illusionarc.com/" style="text-decoration:none;">iSpark</a>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>
