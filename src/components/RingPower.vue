<template>
  <div class="card"><div ref="el" class="chart"></div></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const props = defineProps<{ percent: number }>()
const el = ref<HTMLDivElement>()
onMounted(() => {
  const chart = echarts.init(el.value!)
  chart.setOption({
    series: [{
      type: 'pie', radius: ['70%', '80%'], silent: true,
      label: { show: false }, labelLine: { show: false },
      data: [
        { value: props.percent, itemStyle: { color: '#7b5cff' } },
        { value: 100 - props.percent, itemStyle: { color: '#e6e6ef' } }
      ]
    }],
    graphic: [
      { type: 'text', left: 'center', top: '38%',
        style: { text: props.percent + '%', fontSize: 30, fontWeight: 'bold', fill: '#2b2a5e' } },
      { type: 'text', left: 'center', top: '64%',
        style: { text: '0kW', fontSize: 18, fill: '#2b2a5e' } },
      { type: 'text', left: 'center', top: '74%',
        style: { text: '功率', fontSize: 16, fill: '#9aa0c0' } }
    ]
  })
})
</script>
<style scoped>
.card {
  background: rgba(255,255,255,0.6); border-radius: 18px; width: 240px; height: 234px;
  box-shadow: 0 8px 24px rgba(120,110,200,0.08);
}
.chart { width: 100%; height: 100%; }
</style>
