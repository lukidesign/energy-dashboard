<template>
  <div class="eco">
    <div class="row" v-for="c in cards" :key="c.label">
      <div class="icon" :style="{ background: c.color }">{{ c.emoji }}</div>
      <div>
        <div class="lab">{{ c.label }}</div>
        <div class="val">{{ c.value }} <small>{{ c.unit }}</small></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const cards = [
  { emoji: '🌿', label: '等效绿植', value: '528', unit: '棵', color: '#8b6bff' },
  { emoji: '☁️', label: '二氧化碳减排', value: '3,523', unit: '吨', color: '#4dc8ff' },
  { emoji: '⛏️', label: '节约标准煤', value: '1,762', unit: '吨', color: '#ff8a5c' }
]
</script>
<style scoped>
.eco { margin-top: 60px; display: flex; flex-direction: column; gap: 40px; }
.row { display: flex; align-items: center; gap: 20px; }
.icon {
  width: 76px; height: 76px; border-radius: 20px; font-size: 30px;
  display: flex; align-items: center; justify-content: center; color: #fff;
}
.lab { font-size: 24px; color: var(--c-text-dark); }
.val { font-size: 28px; font-weight: 700; margin-top: 4px; }
.val small { font-size: 16px; font-weight: 400; color: var(--c-text-mute); }
</style>
