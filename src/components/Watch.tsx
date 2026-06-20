import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const FEATURED = { eyebrow: 'Single · 2025', title: 'Fidel', youtubeId: 'SlL6MT3ytwY' }

const VIDEOS = [
  { eyebrow: 'Title Track · 2024', title: 'Barefoot', youtubeId: '6wU6wCr0-kE' },
  { eyebrow: 'Touch of Tsion · 2016', title: 'Bado Igir', youtubeId: 'IWLS9Ho360Y' },
]

interface VideoThumbProps {
  eyebrow: string
  title: string
  youtubeId: string
  featured?: boolean
  delay?: string
}

function VideoThumb({ eyebrow, title, youtubeId, featured = false, delay }: VideoThumbProps) {
  const [activated, setActivated] = useState(false)

  return (
    <div className="r-rise flex flex-col" style={{ gap: '16px', animationDelay: delay }}>
      <div
        className="relative rounded-card overflow-hidden w-full"
        style={{
          aspectRatio: '16/9',
          border: featured ? '1.5px solid rgba(201,138,43,.5)' : '1px solid rgba(201,138,43,.3)',
        }}
      >
        {activated ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setActivated(true)}
            aria-label={`Play video: ${title}`}
            className="group/play absolute inset-0 w-full h-full cursor-pointer border-0 p-0 bg-transparent"
          >
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt={title}
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget
                if (!img.src.endsWith('hqdefault.jpg')) {
                  img.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
                }
              }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-105"
            />
            <div className="absolute inset-0 bg-surface/25 transition-colors duration-300 group-hover/play:bg-surface/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex items-center justify-center rounded-full bg-gold-400 text-surface shadow-lg transition-transform duration-300 group-hover/play:scale-110"
                style={{ width: featured ? '76px' : '60px', height: featured ? '76px' : '60px' }}
              >
                <svg width={featured ? 26 : 21} height={featured ? 30 : 24} viewBox="0 0 24 28" fill="currentColor" style={{ marginLeft: '4px' }}>
                  <path d="M0 0 L24 14 L0 28 Z" />
                </svg>
              </span>
            </span>
          </button>
        )}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col pointer-events-none z-[1]" style={{ width: '5px' }}>
          <span className="flex-1 bg-rasta-red" />
          <span className="flex-1 bg-rasta-gold" />
          <span className="flex-1 bg-rasta-green" />
        </div>
      </div>

      <div>
        <span
          className="font-sans font-semibold uppercase text-gold-600"
          style={{ fontSize: '11px', letterSpacing: '.24em' }}
        >
          {eyebrow}
        </span>
        <h3
          className="font-serif font-normal text-sand-50 mt-[6px]"
          style={{
            fontSize: featured ? 'clamp(28px, 3vw, 38px)' : '24px',
            lineHeight: '1',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  )
}

export default function Watch() {
  const head = useInView<HTMLDivElement>()
  const featured = useInView<HTMLDivElement>()
  const grid = useInView<HTMLDivElement>()

  return (
    <section id="watch" className="relative bg-surface-2 overflow-hidden border-t border-gold-400/10 scroll-mt-16">
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.14 }} />

      <div className="relative z-[2] px-7 py-20 lg:px-[90px] lg:py-[128px] lg:pb-[144px]">
        {/* Header */}
        <div ref={head.ref} className={`lg:max-w-[1100px] lg:mx-auto ${head.inView ? 'in-view' : ''}`}>
          <div className="flex items-center mb-6" style={{ gap: '14px' }}>
            <span className="r-line block bg-gold-400" style={{ width: '46px', height: '2px' }} />
            <span className="r-rise font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em', animationDelay: '0.15s' }}>
              Music Videos
            </span>
          </div>
          <h2
            className="r-rise font-serif font-normal text-sand-50"
            style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.0', letterSpacing: '-0.015em', animationDelay: '0.25s' }}
          >
            Watch
          </h2>
        </div>

        {/* Featured video — full content width */}
        <div ref={featured.ref} className={`mt-14 lg:mt-[56px] lg:max-w-[1100px] lg:mx-auto ${featured.inView ? 'in-view' : ''}`}>
          <VideoThumb featured {...FEATURED} />
        </div>

        {/* Two smaller videos below */}
        <div
          ref={grid.ref}
          className={`mt-10 lg:mt-[40px] lg:max-w-[1100px] lg:mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[24px] items-start ${grid.inView ? 'in-view' : ''}`}
        >
          {VIDEOS.map(({ eyebrow, title, youtubeId }, i) => (
            <VideoThumb key={title} eyebrow={eyebrow} title={title} youtubeId={youtubeId} delay={`${i * 0.12}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
