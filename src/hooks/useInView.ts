import { useEffect, useRef, useState } from 'react'

/**
 * Observe an element and report when it first scrolls into view.
 * Fires once, then disconnects — the element stays "revealed".
 *
 * Usage:
 *   const { ref, inView } = useInView()
 *   <div ref={ref} className={inView ? 'in-view' : ''}>…</div>
 * Mark children with r-rise / r-line / r-stripe / r-photo + an
 * inline animationDelay to stagger them.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  // Trigger once the element is ~25% into the viewport (not the moment its
  // edge peeks in at the bottom) so the reveal isn't already over by the
  // time you've scrolled to it. threshold:0 keeps it reliable for elements
  // taller than the viewport.
  options: IntersectionObserverInit = { threshold: 0, rootMargin: '0px 0px -25% 0px' }
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
    // options is read once at mount; intentionally not in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}
