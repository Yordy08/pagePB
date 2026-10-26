<script setup lang="ts">
const { theme, toggleTheme } = useSiteTheme()
</script>

<template>
  <button class="theme-toggle" type="button" :aria-label="theme === 'day' ? 'Activar modo nocturno' : 'Activar modo día'" :title="theme === 'day' ? 'Modo nocturno' : 'Modo día'" @click="toggleTheme">
    <span class="theme-icon">{{ theme === 'day' ? '☾' : '☀' }}</span>
    <span class="theme-label">{{ theme === 'day' ? 'Noche' : 'Día' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle{height:32px;display:inline-flex;align-items:center;gap:6px;padding:0 9px;border:1px solid #d8dadd;border-radius:16px;background:#fff;color:#41474d;font:700 9px 'Lato',Arial,sans-serif;cursor:pointer;transition:background .18s,border-color .18s,color .18s}.theme-toggle:hover{border-color:#bb1919;color:#bb1919}.theme-icon{font-size:15px;line-height:1}.theme-label{font-size:8px}
</style>
