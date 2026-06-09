<template><canvas ref="cv" class="globe"></canvas></template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const cv = ref<HTMLCanvasElement>()
let raf = 0
let ro: ResizeObserver | null = null

onMounted(() => {
  const canvas = cv.value!
  const ctx = canvas.getContext('2d')!
  let W = 0, H = 0, R = 0, cx = 0, cy = 0
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  const resize = () => {
    const rect = canvas.getBoundingClientRect()
    W = rect.width; H = rect.height
    canvas.width = W * dpr; canvas.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    R = Math.min(W, H) * 0.42
    cx = W / 2; cy = H / 2
  }
  resize()
  ro = new ResizeObserver(resize)
  ro.observe(canvas)

  // build sphere lattice points (lat/long grid)
  const pts: { lat: number; lon: number }[] = []
  for (let lat = -80; lat <= 80; lat += 9) {
    const ring = Math.max(6, Math.round(Math.cos(lat * Math.PI / 180) * 40))
    for (let i = 0; i < ring; i++) pts.push({ lat, lon: (360 / ring) * i })
  }

  let phase = 0
  const draw = () => {
    ctx.clearRect(0, 0, W, H)
    phase += 0.35
    const sinT = Math.sin(-23 * Math.PI / 180), cosT = Math.cos(-23 * Math.PI / 180) // slight tilt
    for (const p of pts) {
      const la = p.lat * Math.PI / 180
      const lo = (p.lon + phase) * Math.PI / 180
      let x = Math.cos(la) * Math.sin(lo)
      let y = Math.sin(la)
      let z = Math.cos(la) * Math.cos(lo)
      // apply tilt around X axis
      const y2 = y * cosT - z * sinT
      const z2 = y * sinT + z * cosT
      const sx = cx + x * R
      const sy = cy - y2 * R
      const front = z2 > 0
      const depth = (z2 + 1) / 2
      const r = front ? 1.6 : 1.1
      const alpha = front ? 0.35 + depth * 0.55 : 0.12 + depth * 0.18
      ctx.beginPath()
      ctx.arc(sx, sy, r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(123, 92, 255, ${alpha})`
      ctx.fill()
    }
    // soft inner sphere glow
    const g = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.3, R * 0.1, cx, cy, R)
    g.addColorStop(0, 'rgba(180,180,240,0.18)')
    g.addColorStop(1, 'rgba(123,92,255,0)')
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
    raf = requestAnimationFrame(draw)
  }
  draw()
})

onUnmounted(() => { cancelAnimationFrame(raf); ro?.disconnect() })
</script>

<style scoped>
.globe { width: 100%; height: 100%; display: block; }
</style>
