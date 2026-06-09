<template>
  <div class="table-card">
    <div class="thead">
      <span>状态</span><span>电站名称</span><span>当前功率</span>
      <span>今日发电量</span><span>总发电量</span>
    </div>
    <div class="tbody-wrap">
      <div class="tbody" :style="{ transform: `translateY(-${offset * rowH}px)` }">
        <div class="trow" v-for="(s, i) in loopList" :key="i">
          <span class="online">{{ s.status }}</span>
          <span>{{ s.name }}</span>
          <span class="mute">{{ s.power }}</span>
          <span>{{ s.today }}</span>
          <span>{{ s.total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { stations } from '../mock/data'
const rowH = 56
const offset = ref(0)
const loopList = computed(() => [...stations, ...stations.slice(0, 6)])
let timer: number
onMounted(() => {
  timer = window.setInterval(() => {
    offset.value++
    if (offset.value >= stations.length) {
      setTimeout(() => (offset.value = 0), 600)
    }
  }, 2500)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.table-card { margin-top: 30px; font-size: 16px; }
.thead, .trow {
  display: grid; grid-template-columns: 70px 130px 110px 130px 130px;
  align-items: center; height: 56px;
}
.thead { color: var(--c-text-dark); font-weight: 600; }
.tbody-wrap { height: 336px; overflow: hidden; }
.tbody { transition: transform 0.6s ease; }
.trow { border-top: 1px solid rgba(150,150,180,0.15); }
.online { color: var(--c-text-dark); }
.mute { color: var(--c-text-mute); }
</style>
