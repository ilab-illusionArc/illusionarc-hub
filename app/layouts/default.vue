<script setup lang="ts">
const { $tenant, $host } = useNuxtApp()
</script>

<template>
  <div style="font-family: system-ui;">
    <header style="padding: 16px 24px; border-bottom: 1px solid #eee;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
        <nav style="display: flex; gap: 12px; align-items: center;">
          <NuxtLink to="/" style="text-decoration:none;">Main</NuxtLink>
          <NuxtLink to="/ilab" style="text-decoration:none;">iLab</NuxtLink>
          <NuxtLink to="/itoon" style="text-decoration:none;">iToon</NuxtLink>
          <NuxtLink to="/ispark" style="text-decoration:none;">iSpark</NuxtLink>
        </nav>

        <div style="font-size:12px; opacity:.75;">
          tenant: <b>{{ $tenant }}</b> · host: {{ $host }}
        </div>
      </div>
    </header>

    <NuxtPage />
  </div>
</template>
