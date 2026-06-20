import FootprintSVG from './FootprintSVG'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0E0A08] lg:bg-surface h-[680px] lg:h-[820px]">

      {/* Noise overlay */}
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.15 }} />

      {/* ── MOBILE LAYOUT ── */}
      <img
        src="/seated.jpg"
        alt="Ras Kawintseb"
        className="lg:hidden absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="lg:hidden absolute inset-0"
        style={{ background: 'linear-gradient(to top, #1C1411 0%, rgba(28,20,17,.55) 45%, rgba(28,20,17,.4) 100%)' }}
      />

      {/* Mobile text block, anchored to bottom */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 z-[2] px-7 pt-12 pb-[42px]">
        <div className="flex items-center mb-4" style={{ gap: '10px' }}>
          <span className="block bg-gold-400" style={{ width: '30px', height: '2px' }} />
          <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '11px', letterSpacing: '.26em' }}>
            Roots Reggae Messenger
          </span>
        </div>
        <h1 className="font-serif font-normal text-sand-50" style={{ fontSize: '60px', lineHeight: '0.94', letterSpacing: '-0.015em' }}>
          Ras<br />Kawintseb
        </h1>
        <div className="flex items-center mt-3" style={{ gap: '8px' }}>
          <span className="font-serif italic text-gold-400/70" style={{ fontSize: '16px', letterSpacing: '0.04em' }}>
            The Barefoot Rasta
          </span>
          <FootprintSVG width={14} height={18} opacity={0.7} />
        </div>
        <p className="font-sans text-sand-200 mt-4" style={{ fontSize: '16px', lineHeight: '1.55' }}>
          Roots reggae from Zion — carried from the Ethiopian highlands to the world.
        </p>
        <div className="flex flex-wrap mt-7" style={{ gap: '12px' }}>
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
          <div className="absolute pointer-events-none z-0" style={{ right: '-30px', bottom: '-80px', opacity: 0.05 }}>
            <FootprintSVG width={360} height={585} />
          </div>

          {/* Content pushed to bottom */}
          <div className="mt-auto relative z-[2]">
            <div className="flex items-center mb-[26px]" style={{ gap: '14px' }}>
              <span className="block bg-gold-400" style={{ width: '46px', height: '2px' }} />
              <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em' }}>
                Roots Reggae Messenger
              </span>
            </div>
            <h1 className="font-serif font-normal text-sand-50" style={{ fontSize: '98px', lineHeight: '0.94', letterSpacing: '-0.015em' }}>
              Ras<br />Kawintseb
            </h1>
            <div className="flex items-center mt-[14px]" style={{ gap: '10px' }}>
              <span className="font-serif italic text-gold-400/70" style={{ fontSize: '24px', letterSpacing: '0.04em' }}>
                The Barefoot Rasta
              </span>
              <FootprintSVG width={16} height={21} opacity={0.7} />
            </div>
            <p className="font-sans text-sand-200 mt-[26px]" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '450px' }}>
              Roots reggae from Zion — carried from the Ethiopian highlands to the world.
            </p>
            <div className="flex mt-[40px]" style={{ gap: '14px' }}>
              <a
                href="#music"
                className="inline-flex items-center bg-gold-400 hover:bg-gold-300 text-surface font-bold rounded-sharp no-underline transition-colors"
                style={{ padding: '16px 30px', fontSize: '15px', letterSpacing: '.01em', gap: '11px' }}
              >
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none"><path d="M0 0 L11 6.5 L0 13 Z" fill="currentColor" /></svg>
                Listen
              </a>
              <a
                href="#booking"
                className="inline-flex items-center bg-transparent text-gold-400 font-bold rounded-sharp border border-gold-400/50 hover:border-gold-400 hover:bg-gold-400/[.08] no-underline transition-all"
                style={{ padding: '16px 30px', fontSize: '15px', letterSpacing: '.01em' }}
              >
                Book Ras Kawintseb
              </a>
            </div>
          </div>
        </div>

        {/* Rasta stripe divider */}
        <div className="flex flex-col h-full">
          <span className="flex-1 bg-rasta-red" />
          <span className="flex-1 bg-rasta-gold" />
          <span className="flex-1 bg-rasta-green" />
        </div>

        {/* Right column: photo */}
        <div className="relative overflow-hidden">
          <img
            src="/seated.jpg"
            alt="Ras Kawintseb portrait"
            className="w-full h-full object-cover object-top block"
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
    </section>
  )
}
