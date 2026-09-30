import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal'

const showAll = (nodes: Element[]) => nodes.forEach((node) => node.classList.add('is-visible'))

export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = [...document.querySelectorAll(REVEAL_SELECTOR)]
    if (nodes.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      showAll(nodes)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    const frame = requestAnimationFrame(() => {
      const viewport = window.innerHeight
      for (const node of nodes) {
        const rect = node.getBoundingClientRect()
        if (rect.top < viewport * 0.92 && rect.bottom > 0) {
          node.classList.add('is-visible')
        } else {
          observer.observe(node)
        }
      }
    })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, deps)
}
