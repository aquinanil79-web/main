import { useEffect, useRef } from 'react'

type SilkProps = {
  speed?: number
  scale?: number
  color?: string
  noiseIntensity?: number
  rotation?: number
}

export default function Silk({
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5,
  rotation = 0,
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let animationFrameId = 0

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = Math.max(1, Math.floor(width * ratio))
      canvas.height = Math.max(1, Math.floor(height * ratio))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (time: number) => {
      const width = window.innerWidth
      const height = window.innerHeight
      const t = time * 0.001 * speed

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(2, 6, 23, 0.72)'
      ctx.fillRect(0, 0, width, height)

      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.7,
      )
      gradient.addColorStop(0, `${color}22`)
      gradient.addColorStop(0.4, `${color}10`)
      gradient.addColorStop(1, 'rgba(2, 6, 23, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const lines = 14
      for (let i = 0; i < lines; i += 1) {
        const offset = i / lines
        const baseY = height * (0.15 + offset * 0.7)
        const amplitude = 28 + i * 8
        const phase = i * 0.9 + t

        ctx.beginPath()
        ctx.lineWidth = 18 + i * 1.3
        ctx.strokeStyle = `${color}${i % 2 === 0 ? '22' : '19'}`
        ctx.shadowBlur = 26
        ctx.shadowColor = color

        for (let x = 0; x <= width + 20; x += 12) {
          const y =
            baseY +
            Math.sin(x * 0.008 + phase) * amplitude * noiseIntensity +
            Math.cos(x * 0.01 + phase * 1.8) * (amplitude * 0.6) * scale

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      ctx.shadowBlur = 0
      ctx.globalAlpha = 0.9
      ctx.translate(width / 2, height / 2)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.translate(-width / 2, -height / 2)

      animationFrameId = window.requestAnimationFrame(draw)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animationFrameId = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [color, noiseIntensity, rotation, scale, speed])

  return (
    <div
      className="silk-background"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}
