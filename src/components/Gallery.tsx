import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

interface Photo {
  src: string
  label: string
  caption: string
  pos?: string
}

const G = '/Gallery/Screen%20Shot%202026-06-20%20at%20'

const PHOTOS: Photo[] = [
  // Row 1 — hero + stacked pair
  { src: `${G}20.10.49.webp`,                                label: 'Live',                   caption: 'Live on stage',                        pos: 'center 35%'    },
  { src: `${G}20.01.44.webp`,                                label: 'Drumming',               caption: 'Roots drumming',                       pos: 'center center' },
  { src: `${G}20.12.35.webp`,                                label: 'Portrait',               caption: 'Portrait',                             pos: 'center 28%'    },
  // Row 2 — 3 equal
  { src: `${G}20.01.17.webp`,                                label: 'Live · Peter Tosh',      caption: 'Tribute to Peter Tosh · Alliance Ethio-Française', pos: 'center center' },
  { src: '/Gallery/Screenshot_20210820-231559_YouTube.webp', label: 'Interview',             caption: 'Ethiopian television',                 pos: 'center center' },
  { src: `${G}20.00.23.webp`,                                label: 'Acoustic',               caption: 'Acoustic session',                     pos: 'center center' },
  // Extra row of 4
  { src: `${G}20.11.28.webp`,                                label: 'Live · Bob Marley',      caption: 'Bob Marley birthday celebration',       pos: 'center center' },
  { src: `${G}20.00.59.webp`,                                label: 'Acoustic',               caption: 'Roots flute',                          pos: 'center top'    },
  { src: `${G}20.00.38.webp`,                                label: 'Portrait',               caption: 'Portrait',                             pos: 'center 32%'    },
  { src: `${G}20.11.07.webp`,                                label: 'Lalibela',               caption: 'Lalibela · Church of St. George',      pos: 'center center' },
  // Extra row of 3
  { src: `${G}20.11.41.webp`,                                label: 'Acoustic',               caption: 'Acoustic session',                     pos: 'center top'    },
  { src: `${G}20.13.21.webp`,                                label: 'Live',                   caption: 'Live on stage',                        pos: 'center center' },
  { src: `${G}20.01.33.webp`,                                label: 'Backstage',              caption: 'Behind the scenes',                    pos: 'center center' },
]

const CARD_BASE = 'r-rise group/card relative overflow-hidden rounded-card border border-gold-400/[.14] cursor-pointer transition-colors hover:border-gold-400/50'
const LABEL_BASE = 'absolute left-[14px] bottom-[12px] font-sans font-semibold uppercase text-[#9c8d7c]'

function RastaStripe() {
  return (
    <div className="absolute left-0 top-0 bottom-0 flex flex-col z-[2]" style={{ width: '5px' }}>
      <span className="flex-1 bg-rasta-red" />
      <span className="flex-1 bg-rasta-gold" />
      <span className="flex-1 bg-rasta-green" />
    </div>
  )
}

interface CardProps {
  photo: Photo
  index: number
  onOpen: (i: number) => void
  hero?: boolean
  delay?: string
}

function Card({ photo, index, onOpen, hero, delay }: CardProps) {
  return (
    <div className={CARD_BASE} style={{ height: hero ? '392px' : '184px', animationDelay: delay }} onClick={() => onOpen(index)}>
      <img
        src={photo.src}
        alt={photo.label}
        loading={hero ? undefined : 'lazy'}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        style={{ objectPosition: photo.pos ?? 'center center', backgroundColor: '#140D0A' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top,rgba(20,13,10,.88) 0%,rgba(20,13,10,0) 45%)' }}
      />
      {hero && <RastaStripe />}
      {hero && (
        <div
          className="absolute top-4 right-4 flex items-center justify-center rounded-full z-[2] text-gold-400"
          style={{ width: '34px', height: '34px', background: 'rgba(20,13,10,.5)', backdropFilter: 'blur(2px)', fontSize: '15px' }}
        >
          ⤢
        </div>
      )}
      {hero ? (
        <div className="absolute left-0 right-0 bottom-0 z-[2]" style={{ padding: '64px 26px 24px', background: 'linear-gradient(to top,rgba(20,13,10,.9),transparent)' }}>
          <span className="block font-sans font-semibold uppercase text-gold-600 mb-[5px]" style={{ fontSize: '10px', letterSpacing: '.22em' }}>
            {photo.label}
          </span>
          <span className="font-serif text-sand-50" style={{ fontSize: '26px', letterSpacing: '-.01em' }}>
            {photo.caption}
          </span>
        </div>
      ) : (
        <span className={LABEL_BASE} style={{ fontSize: '9px', letterSpacing: '.16em' }}>
          {photo.label}
        </span>
      )}
    </div>
  )
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)
  const header = useInView<HTMLDivElement>()
  const grid = useInView<HTMLDivElement>()

  useEffect(() => {
    if (lightboxIdx === null) return
    document.body.style.overflow = 'hidden'
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      setLightboxIdx(null)
      if (e.key === 'ArrowLeft')   setLightboxIdx(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null)
      if (e.key === 'ArrowRight')  setLightboxIdx(i => i !== null ? (i + 1) % PHOTOS.length : null)
    }
    window.addEventListener('keydown', handler)
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [lightboxIdx])

  const activePhoto = lightboxIdx !== null ? PHOTOS[lightboxIdx] : null

  return (
    <section id="gallery" className="relative bg-surface overflow-hidden border-t border-gold-400/10 scroll-mt-16">
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.12 }} />

      <div className="relative z-[2] px-5 py-20 lg:px-[70px] lg:py-[118px] lg:pb-[130px]">

        {/* Header */}
        <div ref={header.ref} className={`px-2 lg:px-0 lg:max-w-[1140px] lg:mx-auto mb-7 lg:mb-[46px] flex flex-col lg:flex-row lg:items-end lg:justify-between ${header.inView ? 'in-view' : ''}`} style={{ gap: '20px' }}>
          <div>
            <div className="flex items-center mb-[18px] lg:mb-[22px]" style={{ gap: '14px' }}>
              <span className="r-line block bg-gold-400 w-[30px] lg:w-[46px]" style={{ height: '2px' }} />
              <span className="r-rise font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em', animationDelay: '0.15s' }}>
                On Stage &amp; Off
              </span>
            </div>
            <h2
              className="r-rise font-serif font-normal text-sand-50"
              style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.0', letterSpacing: '-0.015em', animationDelay: '0.25s' }}
            >
              Gallery
            </h2>
          </div>
          <span
            className="r-rise hidden lg:block font-mono font-medium uppercase text-[#7d6a52] pb-[10px]"
            style={{ fontSize: '12px', letterSpacing: '.16em', animationDelay: '0.35s' }}
          >
            13 frames · click any to expand
          </span>
        </div>

        {/* Mosaic grid */}
        <div ref={grid.ref} className={`px-2 lg:px-0 lg:max-w-[1140px] lg:mx-auto ${grid.inView ? 'in-view' : ''}`}>

          {/* Row 1 — hero + stacked pair */}
          <div className="grid gap-[10px] lg:gap-[14px] grid-cols-1 lg:grid-cols-[1.7fr_1fr]">
            <Card photo={PHOTOS[0]} index={0} onOpen={setLightboxIdx} hero delay="0s" />
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-[10px] lg:gap-[14px] lg:flex lg:flex-col">
              <div className="lg:flex-1">
                <Card photo={PHOTOS[1]} index={1} onOpen={setLightboxIdx} delay="0.1s" />
              </div>
              <div className="lg:flex-1">
                <Card photo={PHOTOS[2]} index={2} onOpen={setLightboxIdx} delay="0.18s" />
              </div>
            </div>
          </div>

          {/* Row 2 — 3 equal */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[14px] mt-[10px] lg:mt-[14px]">
            {[3, 4, 5].map((idx, i) => <Card key={idx} photo={PHOTOS[idx]} index={idx} onOpen={setLightboxIdx} delay={`${0.26 + i * 0.08}s`} />)}
          </div>

          {/* Collapsible — row of 4 + row of 3 */}
          {expanded && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] lg:gap-[14px] mt-[10px] lg:mt-[14px]">
                {[6, 7, 8, 9].map((idx, i) => <Card key={idx} photo={PHOTOS[idx]} index={idx} onOpen={setLightboxIdx} delay={`${i * 0.08}s`} />)}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[14px] mt-[10px] lg:mt-[14px]">
                {[10, 11, 12].map((idx, i) => <Card key={idx} photo={PHOTOS[idx]} index={idx} onOpen={setLightboxIdx} delay={`${0.32 + i * 0.08}s`} />)}
              </div>
            </>
          )}
        </div>

        {/* Toggle button */}
        <div className="flex justify-center mt-[38px]">
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center font-sans font-bold uppercase text-gold-400 border border-gold-400/50 rounded-sharp hover:border-gold-400 hover:bg-gold-400/[.08] transition-all"
              style={{ padding: '14px 32px', fontSize: '13px', letterSpacing: '.06em', gap: '11px' }}
            >
              Show 7 more photos
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">
                <path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setExpanded(false)}
              className="font-mono font-medium uppercase text-[#7d6a52] hover:text-sand-400 transition-colors"
              style={{ fontSize: '10px', letterSpacing: '.18em' }}
            >
              Show less ↑
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && activePhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(11,7,5,.93)', backdropFilter: 'blur(3px)', padding: '20px' }}
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 lg:top-[34px] lg:right-[40px] flex items-center justify-center rounded-full text-sand-50 transition-all hover:bg-gold-400/10"
            style={{ width: '46px', height: '46px', fontSize: '20px', border: '1.5px solid rgba(239,230,214,.4)', background: 'transparent' }}
            onClick={e => { e.stopPropagation(); setLightboxIdx(null) }}
            aria-label="Close"
          >✕</button>

          {/* Prev */}
          <button
            className="hidden lg:flex absolute left-[40px] top-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sand-50 transition-colors hover:border-gold-400/60"
            style={{ width: '52px', height: '52px', fontSize: '22px', border: '1.5px solid rgba(239,230,214,.3)', background: 'transparent' }}
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null) }}
            aria-label="Previous"
          >‹</button>

          {/* Frame */}
          <div
            className="relative overflow-hidden rounded-card border"
            style={{ width: 'min(960px,100%)', aspectRatio: '3/2', background: '#1d150f', borderColor: 'rgba(240,174,30,.25)', boxShadow: '0 30px 80px rgba(0,0,0,.6)' }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: activePhoto.pos ?? 'center center' }}
            />
            <RastaStripe />
            <div
              className="absolute left-0 right-0 bottom-0 flex justify-between items-end z-[2]"
              style={{ padding: '54px 28px 22px', background: 'linear-gradient(to top,rgba(20,13,10,.92),rgba(20,13,10,0))' }}
            >
              <span className="font-sans font-medium text-[#C9BBA6]" style={{ fontSize: '13px', letterSpacing: '.04em' }}>
                {activePhoto.caption}
              </span>
              <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '11px', letterSpacing: '.20em' }}>
                {lightboxIdx + 1} / {PHOTOS.length}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="hidden lg:flex absolute right-[40px] top-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sand-50 transition-colors hover:border-gold-400/60"
            style={{ width: '52px', height: '52px', fontSize: '22px', border: '1.5px solid rgba(239,230,214,.3)', background: 'transparent' }}
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? (i + 1) % PHOTOS.length : null) }}
            aria-label="Next"
          >›</button>
        </div>
      )}
    </section>
  )
}
