<template><div ref="el" class="globe"></div></template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
const el = ref<HTMLDivElement>()
onMounted(() => {
  const chart = echarts.init(el.value!)
  chart.setOption({
    globe: {
      baseColor: '#cdd4f5',
      shading: 'color',
      environment: 'transparent',
      light: { ambient: { intensity: 0.9 }, main: { intensity: 0.3 } },
      viewControl: {
        autoRotate: true, autoRotateSpeed: 8,
        rotateSensitivity: 0, zoomSensitivity: 0, panSensitivity: 0,
        distance: 180
      },
      itemStyle: { color: '#aeb6ee', opacity: 0.85 }
    }
  } as any)
})
</script>
<style scoped>
.globe { width: 100%; height: 100%; }
</style>
