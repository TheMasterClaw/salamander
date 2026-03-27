'use client'

import { useEffect, useRef, useState } from 'react'
import { createChart, ColorType, IChartApi, ISeriesApi, CandlestickData, Time } from 'lightweight-charts'
import { useOHLC } from '@/hooks/useMarketData'

interface TradingChartProps {
  symbol?: string
  height?: number
  interval?: string
}

const INTERVALS = [
  { label: '1m', value: '1m' },
  { label: '5m', value: '5m' },
  { label: '15m', value: '15m' },
  { label: '1H', value: '1h' },
  { label: '4H', value: '4h' },
  { label: '1D', value: '1d' },
]

const SYMBOLS = ['BTC', 'ETH', 'SOL', 'AVAX', 'LINK']

export default function TradingChart({ symbol: initialSymbol = 'BTC', height = 420, interval: initialInterval = '1h' }: TradingChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
  const volumeSeriesRef = useRef<ISeriesApi<'Histogram'> | null>(null)

  const [activeSymbol, setActiveSymbol] = useState(initialSymbol)
  const [activeInterval, setActiveInterval] = useState(initialInterval)
  const [crosshairData, setCrosshairData] = useState<{ time: string; open: number; high: number; low: number; close: number; volume: number } | null>(null)

  const { candles, loading } = useOHLC(activeSymbol, activeInterval)

  // Create chart
  useEffect(() => {
    if (!chartContainerRef.current) return

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#8b949e',
        fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        fontSize: 11,
      },
      grid: {
        vertLines: { color: 'rgba(30, 42, 58, 0.5)' },
        horzLines: { color: 'rgba(30, 42, 58, 0.5)' },
      },
      crosshair: {
        mode: 0,
        vertLine: {
          width: 1,
          color: 'rgba(34, 197, 94, 0.3)',
          style: 2,
          labelBackgroundColor: '#22c55e',
        },
        horzLine: {
          width: 1,
          color: 'rgba(34, 197, 94, 0.3)',
          style: 2,
          labelBackgroundColor: '#22c55e',
        },
      },
      rightPriceScale: {
        borderColor: 'rgba(30, 42, 58, 0.8)',
        scaleMargins: { top: 0.1, bottom: 0.2 },
      },
      timeScale: {
        borderColor: 'rgba(30, 42, 58, 0.8)',
        timeVisible: true,
        secondsVisible: false,
      },
      handleScroll: { vertTouchDrag: false },
      width: chartContainerRef.current.clientWidth,
      height,
    })

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderDownColor: '#ef4444',
      borderUpColor: '#22c55e',
      wickDownColor: '#ef4444',
      wickUpColor: '#22c55e',
    })

    const volumeSeries = chart.addHistogramSeries({
      priceFormat: { type: 'volume' },
      priceScaleId: '',
    })

    volumeSeries.priceScale().applyOptions({
      scaleMargins: { top: 0.85, bottom: 0 },
    })

    // Crosshair move handler
    chart.subscribeCrosshairMove((param) => {
      if (param.time) {
        const data = param.seriesData.get(candleSeries) as CandlestickData | undefined
        const volData = param.seriesData.get(volumeSeries) as any
        if (data) {
          setCrosshairData({
            time: new Date((param.time as number) * 1000).toLocaleString(),
            open: data.open as number,
            high: data.high as number,
            low: data.low as number,
            close: data.close as number,
            volume: volData?.value || 0,
          })
        }
      } else {
        setCrosshairData(null)
      }
    })

    chartRef.current = chart
    seriesRef.current = candleSeries
    volumeSeriesRef.current = volumeSeries

    // Resize handler
    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      chart.applyOptions({ width })
    })
    resizeObserver.observe(chartContainerRef.current)

    return () => {
      resizeObserver.disconnect()
      chart.remove()
      chartRef.current = null
      seriesRef.current = null
      volumeSeriesRef.current = null
    }
  }, [height])

  // Update data when candles change
  useEffect(() => {
    if (!seriesRef.current || !volumeSeriesRef.current || candles.length === 0) return

    const candleData: CandlestickData[] = candles.map(c => ({
      time: (c.time / 1000) as Time,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }))

    const volumeData = candles.map(c => ({
      time: (c.time / 1000) as Time,
      value: c.volume,
      color: c.close >= c.open ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)',
    }))

    seriesRef.current.setData(candleData)
    volumeSeriesRef.current.setData(volumeData)
    chartRef.current?.timeScale().fitContent()
  }, [candles])

  // Current price info
  const lastCandle = candles[candles.length - 1]
  const prevCandle = candles[candles.length - 2]
  const priceChange = lastCandle && prevCandle ? ((lastCandle.close - prevCandle.close) / prevCandle.close) * 100 : 0
  const isUp = priceChange >= 0

  return (
    <div className="card-glass" style={{ padding: 0, overflow: 'hidden' }}>
      {/* Chart header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 pt-4 pb-3"
        style={{ borderBottom: '1px solid rgba(30,42,58,0.5)' }}>
        <div className="flex items-center gap-4">
          {/* Symbol selector */}
          <div className="flex items-center gap-1.5">
            {SYMBOLS.map(s => (
              <button
                key={s}
                onClick={() => setActiveSymbol(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeSymbol === s ? 'text-white' : ''
                }`}
                style={{
                  background: activeSymbol === s ? 'rgba(34,197,94,0.2)' : 'transparent',
                  color: activeSymbol === s ? '#22c55e' : '#8b949e',
                  border: activeSymbol === s ? '1px solid rgba(34,197,94,0.3)' : '1px solid transparent',
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Price display */}
          {lastCandle && (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-mono" style={{ color: isUp ? '#22c55e' : '#ef4444' }}>
                ${lastCandle.close.toLocaleString(undefined, { maximumFractionDigits: lastCandle.close > 100 ? 0 : 2 })}
              </span>
              <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${isUp ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                {isUp ? '+' : ''}{priceChange.toFixed(2)}%
              </span>
            </div>
          )}
        </div>

        {/* Interval selector */}
        <div className="flex items-center gap-1">
          {INTERVALS.map(i => (
            <button
              key={i.value}
              onClick={() => setActiveInterval(i.value)}
              className="px-2 py-1 rounded text-[10px] font-mono font-medium transition-all"
              style={{
                background: activeInterval === i.value ? 'rgba(34,197,94,0.15)' : 'transparent',
                color: activeInterval === i.value ? '#22c55e' : '#8b949e',
              }}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>

      {/* Crosshair data overlay */}
      {crosshairData && (
        <div className="absolute top-16 left-5 z-10 flex gap-3 text-[10px] font-mono" style={{ color: '#8b949e' }}>
          <span>O <span style={{ color: '#e6edf3' }}>{crosshairData.open.toLocaleString()}</span></span>
          <span>H <span style={{ color: '#22c55e' }}>{crosshairData.high.toLocaleString()}</span></span>
          <span>L <span style={{ color: '#ef4444' }}>{crosshairData.low.toLocaleString()}</span></span>
          <span>C <span style={{ color: '#e6edf3' }}>{crosshairData.close.toLocaleString()}</span></span>
          <span>V <span style={{ color: '#8b949e' }}>{crosshairData.volume.toLocaleString()}</span></span>
        </div>
      )}

      {/* Chart */}
      <div className="relative" style={{ minHeight: height }}>
        {loading && candles.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#8b949e' }}>
              <div className="w-4 h-4 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
              Loading {activeSymbol}/USD...
            </div>
          </div>
        )}
        <div ref={chartContainerRef} style={{ height }} />
      </div>
    </div>
  )
}
