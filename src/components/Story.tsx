import FootprintSVG from './FootprintSVG'
import { useInView } from '../hooks/useInView'

export default function Story() {
  const header = useInView<HTMLDivElement>()
  const body = useInView<HTMLDivElement>()

  return (
    <section id="story" className="relative bg-surface overflow-hidden border-t border-gold-400/10 scroll-mt-16">

      {/* Noise overlay */}
      <div className="noise absolute inset-0 z-[6] pointer-events-none" />

      {/* Foot watermark */}
      <div className="anim-drift absolute pointer-events-none z-0" style={{ left: '-70px', top: '120px', opacity: 0.035 }}>
        <FootprintSVG width={380} height={618} />
      </div>

      <div className="relative z-[2] px-7 py-20 lg:px-[100px] lg:py-[130px] lg:pb-[144px]">

        {/* Header */}
        <div ref={header.ref} className={`lg:max-w-[1080px] lg:mx-auto ${header.inView ? 'in-view' : ''}`}>
          <div className="flex items-center mb-[18px] lg:mb-6" style={{ gap: '12px' }}>
            <span className="r-line block bg-gold-400 w-[30px] lg:w-[46px]" style={{ height: '2px' }} />
            <span className="r-rise font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em', animationDelay: '0.15s' }}>
              The Story
            </span>
          </div>
          <h2
            className="r-rise font-serif font-normal text-sand-50 lg:max-w-[760px]"
            style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.02', letterSpacing: '-0.015em', animationDelay: '0.25s' }}
          >
            A Roots Reggae Messenger
          </h2>
        </div>

        {/* Body: photo + text */}
        <div
          ref={body.ref}
          className={`mt-8 lg:mt-[62px] lg:max-w-[1080px] lg:mx-auto lg:grid lg:grid-cols-[418px_1fr] lg:gap-[74px] lg:items-start ${body.inView ? 'in-view' : ''}`}
        >

          {/* Portrait */}
          <div>
            <div className="relative w-full overflow-hidden rounded-sharp border border-gold-400/[.18] aspect-[4/5] lg:aspect-[2/3]">
              <img
                src="/portrait.webp" loading="lazy" decoding="async"
                alt="Ras Kawintseb"
                className="r-photo w-full h-full object-cover"
              />
              {/* Rasta stripe at portrait bottom */}
              <div className="r-line absolute bottom-0 left-0 right-0 flex" style={{ height: '5px', animationDelay: '0.35s' }}>
                <span className="flex-1 bg-rasta-red" />
                <span className="flex-1 bg-rasta-gold" />
                <span className="flex-1 bg-rasta-green" />
              </div>
            </div>
            <p className="r-rise mt-4 font-sans font-medium text-sand-400" style={{ fontSize: '12px', letterSpacing: '.04em', animationDelay: '0.45s' }}>
              Ras Kawintseb — performing live on guitar with his band Aeti+oPHrika Reggaestra.
            </p>
            <a
              href="/Bio Ras Kawintseb.pdf"
              download="Bio Ras Kawintseb.pdf"
              className="r-rise group mt-6 w-full inline-flex items-center justify-center bg-transparent text-gold-400 font-bold rounded-sharp border border-gold-400/50 hover:border-gold-400 hover:bg-gold-400/[.08] no-underline transition-all"
              style={{ padding: '14px 24px', fontSize: '14px', letterSpacing: '.01em', gap: '9px', animationDelay: '0.55s' }}
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                <path d="M6 0v9M2 5l4 4 4-4M0 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Biography
            </a>
          </div>

          {/* Text */}
          <div className="mt-8 lg:mt-0">
            <p className="r-rise font-sans text-[#C7B9A6] lg:max-w-[580px]" style={{ fontSize: '18px', lineHeight: '1.85', animationDelay: '0.15s' }}>
              Ras Kawintseb is a Roots Reggae Messenger rooted in Rastafari. Born in Trinidad and Tobago, he made the journey home in the 1990s — repatriating to the Ethiopian highlands of Shashemene, and in time becoming a citizen of the land he calls Zion. He stepped onto Ethiopian soil <strong>barefoot</strong><span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px', marginRight: '2px', position: 'relative', top: '-2px' }}><FootprintSVG width={10} height={16} opacity={0.7} /></span> — and has walked the promised land that way ever since, skin to soil, nothing between him and the land he returned to. It has been his home, and his stage, from that day forward.</p>
            {/* Pull quote */}
            <blockquote className="flex my-9 lg:my-[44px] lg:max-w-[580px]" style={{ gap: '24px' }}>
              <div className="r-stripe flex flex-col rounded-sharp overflow-hidden" style={{ flex: 'none', width: '4px', animationDelay: '0.35s' }}>
                <span className="flex-1 bg-rasta-red" />
                <span className="flex-1 bg-rasta-gold" />
                <span className="flex-1 bg-rasta-green" />
              </div>
              <p
                className="r-rise font-serif font-normal text-sand-50 text-2xl lg:text-[30px]"
                style={{ fontStyle: 'italic', lineHeight: '1.36', letterSpacing: '-0.01em', animationDelay: '0.5s' }}
              >
                "Using reggae as a vehicle to inspire, educate, and uplift."
              </p>
            </blockquote>

            <p className="r-rise font-sans text-[#C7B9A6] lg:max-w-[580px]" style={{ fontSize: '18px', lineHeight: '1.85', animationDelay: '0.5s' }}>
              His music is roots reggae in the truest sense: a vehicle for a message of unity and Pan-Afrikan consciousness, meant to inspire, educate, and uplift — earning him the name <span className="font-bold">Father of Ethiopian Reggae</span>. An accomplished singer and songwriter, he performs on guitar, bass, wooden flute, and harmonica, drawing on the influence of his father John E. Harvey, B.B. King, and the Original Wailers — Bob Marley, Peter Tosh, and Bunny Livingstone.
            </p>
            <br/>
            <p className="r-rise font-sans text-[#C7B9A6] lg:max-w-[580px]" style={{ fontSize: '18px', lineHeight: '1.85', animationDelay: '0.6s' }}>
              And he does not carry the message alone. Alongside him stands the Aeti+oPHrika Reggaestra — not a backing band, but a reggaestra: a full ensemble that turns every performance into a gathering, a sound built to move both feet and spirit.            </p>
            <br/>
            {/* <p className="font-sans text-[#C7B9A6] lg:max-w-[580px]" style={{ fontSize: '18px', lineHeight: '1.85' }}>
            In 2023, he gave significant time to service through the Pan African School (DEUG 27), working with young Ethiopians and Sudanese refugee children — introducing them to singing, group performance, and the history and spirit of Pan-Afrikanism. For Ras Kawintseb, the music and the message have always been one and the same.            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
