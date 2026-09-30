import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  duration?: number
}

const parse = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/)
  return match ? { target: Number(match[1]), suffix: match[2] } : null
}

export function CountUp({ value, duration = 1100 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(() => {
    const parsed = parse(value)
    return parsed ? '0' + parsed.suffix : value
  })

  useEffect(() => {
    const parsed = parse(value)
    if (!parsed) return
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(String(Math.round(parsed.target * eased)) + parsed.suffix)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [value, duration])

  return <span ref={ref}>{display}</span>
}
