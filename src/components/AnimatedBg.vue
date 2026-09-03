<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isDark = useDark();

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseVx: number
  baseVy: number
  radius: number
}

let animationFrame = 0
let resizeHandler: (() => void) | null = null
let mouseMoveHandler: ((event: MouseEvent) => void) | null = null
let mouseLeaveHandler: (() => void) | null = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let particles: Particle[] = []

  const mouse = {
    x: -1000,
    y: -1000,
    active: false
  }

  // =========================================
  //
  // =========================================
  const connectionDistance = 210;
  const mouseRadius = 160;
  const glowRadius = 75;

  const resize = () => {
    width = Math.max(window.innerWidth, document.documentElement.clientWidth)
    height = Math.max(window.innerHeight, document.documentElement.clientHeight)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const targetCount = Math.min(
      Math.floor((width * height) / 28000),
      50
    )

    particles = []
    for (let i = 0; i < targetCount; i++) {
      const vx = (Math.random() - 0.5) * 0.4
      const vy = (Math.random() - 0.5) * 0.4
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        radius: Math.random() * 1.5 + 1
      })
    }
  }

  resize()
  resizeHandler = resize
  window.addEventListener('resize', resize)

  // Mouse Events
  mouseMoveHandler = (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    mouse.active = true
  }

  mouseLeaveHandler = () => {
    mouse.active = false
    mouse.x = -1000
    mouse.y = -1000
  }

  window.addEventListener('mousemove', mouseMoveHandler, { passive: true })
  document.addEventListener('mouseleave', mouseLeaveHandler)

  // DRAW LOOP
  let time = 0
  const draw = () => {
    time += 0.01
    ctx.clearRect(0, 0, width, height)

    // Background Dark
    ctx.fillStyle = isDark.value ? '#030712' : '#f1f5f9'
    ctx.fillRect(0, 0, width, height)

    // 1. UPDATE PARTICLES
    for (const particle of particles) {
      particle.vx += (particle.baseVx - particle.vx) * 0.05
      particle.vy += (particle.baseVy - particle.vy) * 0.05

      if (mouse.active) {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius && distance > 0) {
          const force = (1 - distance / mouseRadius) * 0.04
          particle.vx += (dx / distance) * force
          particle.vy += (dy / distance) * force
        }
      }

      particle.x += particle.vx + Math.sin(time + particle.y * 0.008) * 0.15
      particle.y += particle.vy + Math.cos(time + particle.x * 0.008) * 0.15

      if (particle.x < 0) particle.x = width
      if (particle.x > width) particle.x = 0
      if (particle.y < 0) particle.y = height
      if (particle.y > height) particle.y = 0
    }

    // 2. NETWORK CONNECTIONS
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {

          const opacity = (1 - distance / connectionDistance) * 0.32

          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)

          ctx.strokeStyle = isDark.value ? `rgba(148, 163, 184, ${opacity})` : `rgba(100, 116, 139, ${opacity})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    // 3. MOUSE GLOW & CONNECTIONS
    if (mouse.active) {
      for (const particle of particles) {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const opacity = (1 - distance / mouseRadius) * 0.4
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(particle.x, particle.y)
          ctx.strokeStyle = isDark.value ? `rgba(52, 211, 153, ${opacity})` : `rgba(16, 185, 129, ${opacity})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, glowRadius
      )
      gradient.addColorStop(0, isDark.value ? 'rgba(52, 211, 153, 0.18)' : 'rgba(16, 185, 129, 0.12)')
      gradient.addColorStop(1, 'rgba(52, 211, 153, 0)')

      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // 4. DRAW PARTICLES
    for (const particle of particles) {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = isDark.value ? 'rgba(226, 232, 240, 0.85)' : 'rgba(100, 116, 139, 0.55)'
      ctx.fill()
    }

    animationFrame = requestAnimationFrame(draw)
  }

  draw()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  if (mouseMoveHandler) window.removeEventListener('mousemove', mouseMoveHandler)
  if (mouseLeaveHandler) document.removeEventListener('mouseleave', mouseLeaveHandler)
})
</script>

<template>
  <div class="animated-bg bg-slate-100 dark:bg-[#030712]" aria-hidden="true">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  background: #030712;
}

canvas {
  display: block;
  width: 100vw !important;
  height: 100vh !important;
}
</style>