'use client'

import { useRef, useEffect } from 'react'

interface SparklineProps {
  data: number[]
  width?: number
  height?: number
  color?: string
  filled?: boolean
}

export default function Sparkline({ data, width = 120, height = 32, color = '#22c55e', filled = true }: SparklineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || data.length < 2) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    const points: [number, number][] = data.map((v, i) => [
      (i / (data.length - 1)) * width,
      height - ((v - min) / range) * (height * 0.85) - height * 0.075,
    ])

    // Filled area
    if (filled) {
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, color + '40')
      gradient.addColorStop(1, color + '00')

      ctx.beginPath()
      ctx.moveTo(0, height)
      points.forEach(([x, y]) => ctx.lineTo(x, y))
      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // Line
    ctx.beginPath()
    points.forEach(([x, y], i) => {
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.strokeStyle = color
    ctx.lineWidth = 1.5
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.stroke()

    // End dot
    const [lx, ly] = points[points.length - 1]
    ctx.beginPath()
    ctx.arc(lx, ly, 2.5, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }, [data, width, height, color, filled])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="block"
    />
  )
}
