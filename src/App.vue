<template>
  <video class="bg-video" autoplay muted loop playsinline :src="bgVideo"></video>
  <div class="screen-wrap">
    <div class="screen" ref="screenRef">
      <HeaderBar />
      <section class="col-left">
        <div class="stat-total">
          <div class="label">电站总数</div>
          <div class="row">
            <span class="big">28</span>
            <span class="diff">= 0</span>
          </div>
        </div>
        <StationTable />
        <div class="left-bottom">
          <StatCards />
          <RingPower :percent="6" />
        </div>
      </section>
      <EarthGlobe class="col-center" />
      <section class="col-right">
        <TopMetrics />
        <EcoCards />
      </section>
      <PowerBarChart class="bar-panel" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useScale } from './utils/scale'
import HeaderBar from './components/HeaderBar.vue'
import StationTable from './components/StationTable.vue'
import StatCards from './components/StatCards.vue'
import RingPower from './components/RingPower.vue'
import EarthGlobe from './components/EarthGlobe.vue'
import TopMetrics from './components/TopMetrics.vue'
import EcoCards from './components/EcoCards.vue'
import PowerBarChart from './components/PowerBarChart.vue'

const bgVideo = import.meta.env.BASE_URL + 'Digitaldatabg.mp4'
const screenRef = ref<HTMLElement>()
let cleanup: () => void
onMounted(() => { if (screenRef.value) cleanup = useScale(screenRef.value) })
onUnmounted(() => cleanup?.())
</script>

<style scoped>
.bg-video {
  position: fixed; inset: 0; width: 100%; height: 100%;
  object-fit: cover; z-index: 0; pointer-events: none;
}
.screen-wrap { width: 100%; height: 100%; position: relative; overflow: hidden; z-index: 1; }
.screen {
  position: absolute; left: 50%; top: 50%;
  width: 1920px; height: 1080px;
  transform-origin: 0 0;
}
.col-left { position: absolute; left: 40px; top: 150px; width: 560px; }
.stat-total .label { font-size: 22px; color: var(--c-text-dark); }
.stat-total .row { display: flex; align-items: baseline; gap: 40px; margin-top: 6px; }
.stat-total .big { font-size: 56px; font-weight: 700; color: var(--c-text-dark); }
.stat-total .diff { font-size: 24px; color: var(--c-accent); font-weight: 600; }
.left-bottom { display: flex; gap: 24px; margin-top: 24px; }
.col-center { position: absolute; left: 560px; top: 40px; width: 800px; height: 1000px; }
.col-right { position: absolute; right: 60px; top: 150px; width: 460px; }
.bar-panel {
  position: absolute; right: 40px; bottom: 30px;
  width: 720px; height: 320px;
}
</style>
