<template>
  <div class="panel">
    <div class="head">
      <span class="title">发电量</span>
      <div class="tabs">
        <span v-for="t in tabs" :key="t" :class="{ active: t === cur }"
          @click="switchTab(t)">{{ t }}</span>
      </div>
    </div>
    <div ref="el" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { barData } from '../mock/data'

type Tab = '日' | '月' | '年'
const tabs: Tab[] = ['日', '月', '年']
const cur = ref<Tab>('日')
const el = ref<HTMLDivElement>()
let chart: echarts.ECharts

function render() {
  const d = barData[cur.value]
  chart.setOption({
    grid: { left: 40, right: 20, top: 40, bottom: 30 },
    xAxis: {
      type: 'category', data: d.x,
      axisLine: { show: false }, axisTick: { show: false },
      axisLabel: { color: '#8a8fb0' }
    },
    yAxis: {
      type: 'value', name: d.unit, nameTextStyle: { color: '#9aa0c0' },
      splitLine: { lineStyle: { type: 'dashed', color: '#e3e3ef' } },
      axisLabel: { color: '#9aa0c0' }
    },
    series: [{
      type: 'bar', data: d.y, barWidth: 10,
      itemStyle: {
        borderRadius: [3, 3, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#7b3cff' },
          { offset: 1, color: '#e83e8c' }
        ])
      }
    }]
  })
}
function switchTab(t: Tab) { cur.value = t; render() }
onMounted(() => { chart = echarts.init(el.value!); render() })
</script>

<style scoped>
.panel {
  background: rgba(255,255,255,0.7); border-radius: 20px; padding: 20px 24px;
  width: 100%; height: 100%; box-shadow: 0 10px 30px rgba(120,110,200,0.08);
}
.head { display: flex; justify-content: space-between; align-items: center; }
.title { font-size: 24px; font-weight: 700; }
.tabs { display: flex; gap: 30px; font-size: 20px; }
.tabs span { color: var(--c-text-mute); cursor: pointer; padding-bottom: 4px; }
.tabs span.active { color: var(--c-pink); border-bottom: 2px solid var(--c-pink); }
.chart { width: 100%; height: 230px; margin-top: 10px; }
</style>
