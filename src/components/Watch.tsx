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
}

function VideoThumb({ eyebrow, title, youtubeId, featured = false }: VideoThumbProps) {
  return (
    <div className="flex flex-col" style={{ gap: '16px' }}>
      <div
        className="relative rounded-card overflow-hidden w-full"
        style={{
          aspectRatio: '16/9',
          border: featured ? '1.5px solid rgba(201,138,43,.5)' : '1px solid rgba(201,138,43,.3)',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
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
  return (
    <section id="watch" className="relative bg-surface-2 overflow-hidden border-t border-gold-400/10 scroll-mt-16">
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.14 }} />

      <div className="relative z-[2] px-7 py-20 lg:px-[90px] lg:py-[128px] lg:pb-[144px]">
        {/* Header */}
        <div className="lg:max-w-[1100px] lg:mx-auto">
          <div className="flex items-center mb-6" style={{ gap: '14px' }}>
            <span className="block bg-gold-400" style={{ width: '46px', height: '2px' }} />
            <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em' }}>
              Music Videos
            </span>
          </div>
          <h2
            className="font-serif font-normal text-sand-50"
            style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.0', letterSpacing: '-0.015em' }}
          >
            Watch
          </h2>
        </div>

        {/* Featured video — full content width */}
        <div className="mt-14 lg:mt-[56px] lg:max-w-[1100px] lg:mx-auto">
          <VideoThumb featured {...FEATURED} />
        </div>

        {/* Two smaller videos below */}
        <div className="mt-10 lg:mt-[40px] lg:max-w-[1100px] lg:mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[24px] items-start">
          {VIDEOS.map(({ eyebrow, title, youtubeId }) => (
            <VideoThumb key={title} eyebrow={eyebrow} title={title} youtubeId={youtubeId} />
          ))}
        </div>
      </div>
    </section>
  )
}
