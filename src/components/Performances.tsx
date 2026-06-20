import { useState } from 'react'
import type { Performance } from '../data/types'
import { PERFORMANCES } from '../data/performances'

function perfSubtitle(p: Performance): string | null {
  if (p.location && p.date) return `${p.location} · ${p.date}`
  return p.location ?? p.date ?? null
}

// ── Ethiopia Map ─────────────────────────────────────────────────────────────

function EthiopiaMap() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 130 760 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: '340px', width: '100%', maxWidth: '840px', margin: '0 auto', display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ras-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F0AE1E" stopOpacity=".28" />
            <stop offset="60%"  stopColor="#F0AE1E" stopOpacity=".07" />
            <stop offset="100%" stopColor="#F0AE1E" stopOpacity="0"   />
          </radialGradient>
          <radialGradient id="ras-mapfill" cx="40%" cy="38%" r="75%">
            <stop offset="0%"   stopColor="#2a1f17" />
            <stop offset="100%" stopColor="#1d150f" />
          </radialGradient>
        </defs>

        {/* Glow behind origin */}
        <circle cx="310" cy="430" r="230" fill="url(#ras-glow)" />

        {/* Concentric rings from Shashemene */}
        <g fill="none" stroke="#C98A2B" strokeWidth="1.2">
          <circle cx="310" cy="430" r="80"  strokeOpacity=".85" />
          <circle cx="310" cy="430" r="150" strokeOpacity=".60" />
          <circle cx="310" cy="430" r="220" strokeOpacity=".38" />
          <circle cx="310" cy="430" r="300" strokeOpacity=".20" />
        </g>

        {/* Ethiopia outline — path + transform taken directly from reference design */}
        <path
          transform="translate(-18.6,53.35) scale(1.55)"
          d="M172,102 L185,111 L200,106 L230,110 L254,112 L264,140 L270,160 L276,174 L269,186 L286,191 L295,203 L287,218 L303,223 L321,250 L425,270 L332,326 L295,358 L270,373 L225,391 L215,396 L205,381 L162,376 L140,361 L120,343 L107,318 L95,296 L62,270 L75,258 L85,238 L90,216 L95,200 L107,170 L121,150 L135,131 L148,118 Z"
          fill="url(#ras-mapfill)"
          stroke="#C98A2B"
          strokeWidth="1.2"
          strokeOpacity=".55"
        />

        {/* Dotted reach lines to international locations */}
        <line x1="310" y1="470" x2="660" y2="305" stroke="#F0AE1E" strokeOpacity=".32" strokeDasharray="2 5" strokeLinecap="round" />
        <line x1="310" y1="470" x2="665" y2="595" stroke="#F0AE1E" strokeOpacity=".32" strokeDasharray="2 5" strokeLinecap="round" />

        {/* Toured cities */}
        <g fill="#C98A2B" fontFamily="'Hanken Grotesk', sans-serif" fontSize="13.5">
          <circle cx="332.8" cy="294.9" r="4" /><text x="341"  y="299"                     fill="#CDBFA9">Mekelle</text>
          <circle cx="296.1" cy="279.4" r="4" /><text x="288"  y="275" textAnchor="end"    fill="#CDBFA9">Aksum</text>
          <circle cx="322.4" cy="273.2" r="4" /><text x="322"  y="259" textAnchor="middle" fill="#CDBFA9">Adowa</text>
          <circle cx="372"   cy="288.7" r="4" /><text x="380"  y="285"                     fill="#CDBFA9">Adigrat</text>
          <circle cx="237.2" cy="314"   r="4" /><text x="229"  y="318" textAnchor="end"    fill="#CDBFA9">Gondar</text>
          <circle cx="248"   cy="352.2" r="4" /><text x="240"  y="356" textAnchor="end"    fill="#CDBFA9">Bahir Dar</text>
          <circle cx="333.2" cy="349.1" r="4" /><text x="341"  y="353"                     fill="#CDBFA9">Dessie</text>
          <circle cx="399.9" cy="411.1" r="4" /><text x="408"  y="415"                     fill="#CDBFA9">Dire Dawa</text>
          <circle cx="353.4" cy="428.2" r="4" /><text x="361"  y="432"                     fill="#CDBFA9">Nazareth</text>
          <circle cx="155"   cy="457.6" r="4" /><text x="147"  y="461" textAnchor="end"    fill="#CDBFA9">Gambela</text>
          <circle cx="237.2" cy="446.7" r="4" /><text x="229"  y="450" textAnchor="end"    fill="#CDBFA9">Jimma</text>
          <circle cx="286.8" cy="499.5" r="4" /><text x="278"  y="495" textAnchor="end"    fill="#CDBFA9">Arba Minch</text>
          <circle cx="314.7" cy="414.2" r="5" fill="#E7D6B8" />
          <text x="306" y="411" textAnchor="end" fontWeight="600" fill="#EFE6D6">Addis Ababa</text>
        </g>

        {/* Shashemene — hub */}
        <line x1="310" y1="470" x2="310" y2="556" stroke="#F0AE1E" strokeOpacity=".5" />
        <circle cx="310" cy="470" r="10" fill="#F0AE1E" />
        <circle cx="310" cy="470" r="19" fill="none" stroke="#F0AE1E" strokeOpacity=".5" />
        <text x="310" y="578" textAnchor="middle" fontFamily="'DM Serif Display', serif"     fontSize="22" fill="#F0AE1E">Shashemene</text>
        <text x="310" y="597" textAnchor="middle" fontFamily="'Hanken Grotesk', sans-serif"  fontSize="11" fontWeight="600" letterSpacing=".18em" fill="#C9A86B">SPIRITUAL HOME OF RASTAFARI</text>

        {/* International nodes */}
        <g fontFamily="'Hanken Grotesk', sans-serif">
          <circle cx="660" cy="305" r="6"  fill="#F0AE1E" />
          <circle cx="660" cy="305" r="12" fill="none" stroke="#F0AE1E" strokeOpacity=".4" />
          <text x="646" y="302" textAnchor="end" fontSize="16" fontWeight="700" fill="#F0AE1E">Djibouti</text>
          <text x="646" y="319" textAnchor="end" fontSize="12"                  fill="#9c8d7c">2025</text>

          <circle cx="665" cy="595" r="6"  fill="#F0AE1E" />
          <circle cx="665" cy="595" r="12" fill="none" stroke="#F0AE1E" strokeOpacity=".4" />
          <text x="651" y="592" textAnchor="end" fontSize="16" fontWeight="700" fill="#F0AE1E">Mauritius</text>
          <text x="651" y="609" textAnchor="end" fontSize="12"                  fill="#9c8d7c">2025 · Rastafari welcome</text>
        </g>
      </svg>
    </div>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────

export default function Performances() {
  const [timelineOpen, setTimelineOpen] = useState(false)

  return (
    <section id="live" className="relative bg-surface-1 overflow-hidden border-t border-gold-400/10 scroll-mt-16">
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.13 }} />

      <div className="relative z-[2] px-7 py-20 pb-24 lg:px-[100px] lg:pt-[128px] lg:pb-[160px]">
        <div className="lg:max-w-[1020px] lg:mx-auto">

          {/* Header */}
          <div className="flex items-center mb-[18px] lg:mb-6" style={{ gap: '14px' }}>
            <span className="block bg-gold-400 w-[30px] lg:w-[46px]" style={{ height: '2px' }} />
            <span className="font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em' }}>
              Live
            </span>
          </div>
          <h2
            className="font-serif font-normal text-sand-50"
            style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.0', letterSpacing: '-0.015em' }}
          >
            Performances
          </h2>

          {/* Upcoming slot */}
          <div className="mt-8 lg:mt-11 flex items-start lg:items-center gap-[16px] lg:gap-[22px] bg-surface-card border border-gold-400/[.18] rounded-card px-[18px] py-5 lg:px-[30px] lg:py-[26px]">
            <div className="flex-none self-stretch flex flex-col rounded-sharp overflow-hidden" style={{ width: '4px' }}>
              <span className="flex-1 bg-rasta-red" />
              <span className="flex-1 bg-rasta-gold" />
              <span className="flex-1 bg-rasta-green" />
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-[5px] lg:mb-[7px]" style={{ gap: '8px' }}>
                <span className="relative flex" style={{ width: '8px', height: '8px' }}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-50" />
                  <span className="relative inline-flex rounded-full bg-gold-400" style={{ width: '8px', height: '8px' }} />
                </span>
                <span
                  className="font-sans font-semibold uppercase text-gold-600"
                  style={{ fontSize: '11px', letterSpacing: '.26em' }}
                >
                  Upcoming
                </span>
              </div>
              <div className="font-sans text-sand-300 text-[15px] lg:text-[18px]" style={{ lineHeight: '1.5' }}>
                No upcoming shows announced — check back soon.
              </div>
            </div>
            <a
              href="#booking"
              className="hidden lg:inline-flex flex-none items-center font-sans font-bold text-gold-400 border border-gold-400/50 rounded-sharp transition-all hover:border-gold-400 hover:bg-gold-400/[.08]"
              style={{ padding: '13px 24px', fontSize: '14px' }}
            >
              Book Ras Kawintseb
            </a>
          </div>

          {/* Collapsible timeline */}
          <div className="mt-[44px] lg:mt-[56px]">
            <button
              onClick={() => setTimelineOpen(o => !o)}
              className="w-full flex items-center justify-between text-left"
              style={{
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(240,174,30,0.18)',
                paddingBottom: '16px',
                cursor: 'pointer',
              }}
            >
              <div className="flex items-center" style={{ gap: '12px' }}>
                <svg viewBox="0 0 64 104" className="w-[10px] h-[16px] flex-none" fill="#C98A2B" aria-hidden="true">
                  <ellipse cx="30" cy="76" rx="16" ry="22" />
                  <ellipse cx="30" cy="46" rx="21" ry="22" />
                  <ellipse cx="12" cy="22" rx="7"  ry="9"  />
                  <ellipse cx="27" cy="12" rx="5.5" ry="7" />
                  <ellipse cx="39" cy="12" rx="5"  ry="6.5"/>
                  <ellipse cx="49" cy="17" rx="4.5" ry="6" />
                  <ellipse cx="57" cy="24" rx="4"  ry="5"  />
                </svg>
                <span className="font-sans font-semibold text-sand-100 text-[15px] lg:text-[18px]" style={{ letterSpacing: '-0.01em' }}>
                  Landmark Performances
                </span>
                <span
                  className="font-sans font-semibold text-gold-600 border border-gold-400/25 rounded-sharp"
                  style={{ fontSize: '10px', letterSpacing: '.18em', padding: '3px 7px' }}
                >
                  {PERFORMANCES.length} SHOWS
                </span>
              </div>
              <svg
                width="14" height="8" viewBox="0 0 14 8" fill="none"
                className="text-gold-600 flex-none"
                style={{ transform: timelineOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
              >
                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {timelineOpen && (
              <div className="relative mt-[32px] pl-[32px] lg:pl-[40px]">
                {/* Vertical line */}
                <div
                  className="absolute left-[6px] lg:left-[7px] top-2 bottom-2 w-[2px] pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, rgba(240,174,30,.5), rgba(240,174,30,.12))' }}
                />

                {PERFORMANCES.map((p, i) => {
                  const isLast = i === PERFORMANCES.length - 1
                  const sub = perfSubtitle(p)
                  return (
                    <div
                      key={`${p.year}-${i}`}
                      className={['relative lg:flex lg:gap-[30px]', isLast ? '' : 'pb-[24px] lg:pb-[34px]'].join(' ')}
                    >
                      <div
                        className={[
                          'absolute rounded-full',
                          p.isFeatured
                            ? 'left-[-32px] top-[5px] w-[14px] h-[14px] lg:left-[-40px] lg:w-[16px] lg:h-[16px] bg-gold-400'
                            : 'left-[-29px] top-[6px] w-[8px] h-[8px] lg:left-[-37px] lg:w-[10px] lg:h-[10px] bg-gold-600',
                        ].join(' ')}
                        style={{
                          boxShadow: p.isFeatured
                            ? '0 0 0 5px #19120F, 0 0 0 6px rgba(240,174,30,.3)'
                            : '0 0 0 5px #19120F',
                        }}
                      />
                      <div
                        className="font-serif text-gold-600 mb-[5px] lg:mb-0 lg:flex-none lg:w-[64px]"
                        style={{ fontSize: 'clamp(16px, 1.8vw, 22px)', lineHeight: '1.2' }}
                      >
                        {p.year}
                      </div>
                      <div className={['lg:flex-1', isLast ? '' : 'lg:border-b lg:border-gold-400/[.10] lg:pb-[26px]'].join(' ')}>
                        <div className="font-sans font-semibold text-sand-50 text-[15px] lg:text-[18px]" style={{ lineHeight: '1.4' }}>
                          {p.title}
                        </div>
                        {sub && (
                          <div className="font-sans text-[#9c8d7c] mt-[3px] lg:mt-[5px] text-[13px] lg:text-[15px]">
                            {sub}
                          </div>
                        )}
                        {p.note && (
                          <div
                            className="font-sans text-[#8a7d6e] mt-[7px] lg:mt-[9px] max-w-[520px]"
                            style={{ fontSize: '13px', lineHeight: '1.55' }}
                          >
                            {p.note}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Map — part of this section, not a new one */}
          <div className="mt-[52px] lg:mt-[64px]">
            <div className="flex items-center mb-[14px]" style={{ gap: '10px' }}>
              <span className="block bg-gold-400/40" style={{ width: '28px', height: '1px' }} />
              <span className="font-sans font-semibold uppercase text-[#9c8d7c]" style={{ fontSize: '11px', letterSpacing: '.26em' }}>
                The Holy City, Outward
              </span>
            </div>
            <p
              className="font-serif font-normal text-sand-100 mb-5 lg:mb-6"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: '1.05', letterSpacing: '-0.015em' }}
            >
              From Shashemene to the world
            </p>
            <p
              className="font-sans text-[#B5A691] mb-10 lg:mb-12 max-w-[600px]"
              style={{ fontSize: '16px', lineHeight: '1.75' }}
            >
              From <span className="text-gold-400 font-medium">Shashemene</span> — the spiritual home of Rastafari —
              Ras Kawintseb and the Aeti+oPHrika Reggaestra have carried roots reggae across Ethiopia,
              from Aksum in the north to Arba Minch in the south. In 2025 the journey reached beyond the
              highlands, with shows in Djibouti and Mauritius.
            </p>
            <EthiopiaMap />

            {/* Map key */}
            <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-3 mt-8 lg:mt-10">
              <div className="flex items-center" style={{ gap: '9px' }}>
                <span
                  className="flex-none rounded-full bg-gold-400"
                  style={{ width: '10px', height: '10px', boxShadow: '0 0 0 3px rgba(240,174,30,.28)' }}
                />
                <span className="font-sans font-semibold uppercase text-[#9c8d7c]" style={{ fontSize: '10.5px', letterSpacing: '.16em' }}>
                  Shashemene · home
                </span>
              </div>
              <div className="flex items-center" style={{ gap: '9px' }}>
                <span className="flex-none rounded-full bg-gold-600" style={{ width: '7px', height: '7px' }} />
                <span className="font-sans font-semibold uppercase text-[#9c8d7c]" style={{ fontSize: '10.5px', letterSpacing: '.16em' }}>
                  Cities toured
                </span>
              </div>
              <div className="flex items-center" style={{ gap: '9px' }}>
                <span
                  className="flex-none rounded-full bg-gold-400"
                  style={{ width: '8px', height: '8px', boxShadow: '0 0 0 3px rgba(240,174,30,.18)' }}
                />
                <span className="font-sans font-semibold uppercase text-[#9c8d7c]" style={{ fontSize: '10.5px', letterSpacing: '.16em' }}>
                  International · 2025
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
