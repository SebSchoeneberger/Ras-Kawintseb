import FootprintSVG from './FootprintSVG'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0E0A08] lg:bg-surface h-[680px] lg:h-[820px]">

      {/* Noise overlay */}
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.15 }} />

      {/* ── MOBILE LAYOUT ── */}
      <img
        src="/seated.webp"
        alt="Ras Kawintseb"
        className="anim-photo lg:hidden absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="lg:hidden absolute inset-0"
        style={{ background: 'linear-gradient(to top, #1C1411 0%, rgba(28,20,17,.55) 45%, rgba(28,20,17,.4) 100%)' }}
      />

      {/* Mobile text block, anchored to bottom */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 z-[2] px-7 pt-12 pb-[42px]">
        <div className="anim-rise flex items-center mb-4" style={{ gap: '10px', animationDelay: '0.15s' }}>
          <span className="anim-line block bg-gold-400" style={{ width: '30px', height: '2px', animationDelay: '0.15s' }} />
          <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '11px', letterSpacing: '.26em' }}>
            Roots Reggae Messenger
          </span>
        </div>
        <h1 className="anim-rise font-serif font-normal text-sand-50" style={{ fontSize: '60px', lineHeight: '0.94', letterSpacing: '-0.015em', animationDelay: '0.4s' }}>
          Ras<br />Kawintseb
        </h1>
        <div className="anim-rise flex items-center mt-3" style={{ gap: '8px', animationDelay: '0.65s' }}>
          <span className="font-serif italic text-gold-400/70" style={{ fontSize: '16px', letterSpacing: '0.04em' }}>
            The Barefoot Rasta
          </span>
          <FootprintSVG width={14} height={18} opacity={0.7} />
        </div>
        <p className="anim-rise font-sans text-sand-200 mt-4" style={{ fontSize: '16px', lineHeight: '1.55', animationDelay: '0.85s' }}>
          Roots reggae from Zion — carried from the Ethiopian highlands to the world.
        </p>
        <div className="anim-rise flex flex-wrap mt-7" style={{ gap: '12px', animationDelay: '1.05s' }}>
          <a
            href="#music"
            className="inline-flex items-center bg-gold-400 text-surface font-bold rounded-sharp no-underline"
            style={{ padding: '15px 26px', fontSize: '14px', gap: '10px' }}
          >
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 0 L10 6 L0 12 Z" fill="currentColor" /></svg>
            Listen
          </a>
          <a
            href="#booking"
            className="inline-flex items-center bg-transparent text-gold-400 font-bold rounded-sharp border border-gold-400/50 no-underline"
            style={{ padding: '15px 22px', fontSize: '14px' }}
          >
            Book Ras Kawintseb
          </a>
        </div>
      </div>

      {/* Mobile rasta bar */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 flex z-[7]" style={{ height: '4px' }}>
        <span className="flex-1 bg-rasta-red" />
        <span className="flex-1 bg-rasta-gold" />
        <span className="flex-1 bg-rasta-green" />
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div
        className="hidden lg:grid lg:grid-cols-[1fr_12px_470px] xl:grid-cols-[1fr_12px_580px] 2xl:grid-cols-[1fr_12px_680px] relative z-[2] h-full"
      >
        {/* Left column: text */}
        <div className="relative flex flex-col overflow-hidden" style={{ padding: '62px 56px 56px' }}>
          {/* Foot watermark */}
          <div className="anim-drift absolute pointer-events-none z-0" style={{ right: '-30px', bottom: '-80px', opacity: 0.05 }}>
            <FootprintSVG width={360} height={585} />
          </div>

          {/* Content pushed to bottom */}
          <div className="mt-auto relative z-[2]">
            <div className="anim-rise flex items-center mb-[26px]" style={{ gap: '14px', animationDelay: '0.2s' }}>
              <span className="anim-line block bg-gold-400" style={{ width: '46px', height: '2px', animationDelay: '0.2s' }} />
              <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em' }}>
                Roots Reggae Messenger
              </span>
            </div>
            <h1 className="anim-rise font-serif font-normal text-sand-50" style={{ fontSize: '98px', lineHeight: '0.94', letterSpacing: '-0.015em', animationDelay: '0.45s' }}>
              Ras<br />Kawintseb
            </h1>
            <div className="anim-rise flex items-center mt-[14px]" style={{ gap: '10px', animationDelay: '0.7s' }}>
              <span className="font-serif italic text-gold-400/70" style={{ fontSize: '24px', letterSpacing: '0.04em' }}>
                The Barefoot Rasta
              </span>
              <FootprintSVG width={16} height={21} opacity={0.7} />
            </div>
            <p className="anim-rise font-sans text-sand-200 mt-[26px]" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '450px', animationDelay: '0.95s' }}>
              Roots reggae from Zion — carried from the Ethiopian highlands to the world.
            </p>
            <div className="anim-rise flex mt-[40px]" style={{ gap: '14px', animationDelay: '1.15s' }}>
              <a
                href="#music"
                className="group inline-flex items-center bg-gold-400 hover:bg-gold-300 hover:-translate-y-0.5 text-surface font-bold rounded-sharp no-underline transition-all"
                style={{ padding: '16px 30px', fontSize: '15px', letterSpacing: '.01em', gap: '11px' }}
              >
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M0 0 L11 6.5 L0 13 Z" fill="currentColor" /></svg>
                Listen
              </a>
              <a
                href="#booking"
                className="inline-flex items-center bg-transparent text-gold-400 font-bold rounded-sharp border border-gold-400/50 hover:border-gold-400 hover:bg-gold-400/[.08] hover:-translate-y-0.5 no-underline transition-all"
                style={{ padding: '16px 30px', fontSize: '15px', letterSpacing: '.01em' }}
              >
                Book Ras Kawintseb
              </a>
            </div>
          </div>
        </div>

        {/* Rasta stripe divider */}
        <div className="anim-stripe flex flex-col h-full">
          <span className="flex-1 bg-rasta-red" />
          <span className="flex-1 bg-rasta-gold" />
          <span className="flex-1 bg-rasta-green" />
        </div>

        {/* Right column: photo */}
        <div className="relative overflow-hidden">
          <img
            src="/seated.webp"
            alt="Ras Kawintseb portrait"
            className="anim-photo w-full h-full object-cover object-top block"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(28,20,17,.85) 0%, rgba(28,20,17,0) 30%)' }}
          />
          <div className="absolute flex items-center" style={{ left: '30px', bottom: '26px', gap: '10px' }}>
            <span className="block bg-gold-400" style={{ width: '18px', height: '2px' }} />
            <span className="font-mono font-semibold uppercase text-sand-50" style={{ fontSize: '11px', letterSpacing: '.26em' }}>
              'Barefoot' · out now
            </span>
          </div>
        </div>
      </div>

      {/* Scroll-down cue (desktop) */}
      <a
        href="#story"
        aria-label="Scroll to story"
        className="anim-rise hidden lg:flex absolute left-1/2 -translate-x-1/2 z-[5] flex-col items-center text-gold-400/70 hover:text-gold-400 no-underline transition-colors"
        style={{ bottom: '24px', animationDelay: '1.4s', gap: '8px' }}
      >
        <span className="font-mono font-semibold uppercase" style={{ fontSize: '10px', letterSpacing: '.26em' }}>
          Scroll
        </span>
        <svg className="anim-bob" width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
          <path d="M8 0v17M1 11l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
