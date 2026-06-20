import type { ReactNode } from 'react'
import FootprintSVG from './FootprintSVG'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="4" stroke="#C7B9A6" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.4" stroke="#C7B9A6" strokeWidth="1.5" />
      <circle cx="14.3" cy="5.7" r="1" fill="#C7B9A6" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M12.8 4.8h-1.4a2.2 2.2 0 00-2.2 2.2v9.2" stroke="#C7B9A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.4 9.6h4.6" stroke="#C7B9A6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11.6 3v9.6a2.9 2.9 0 1 1-2.6-2.9" stroke="#C7B9A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6 3.2c.4 2 2 3.5 4 3.6" stroke="#C7B9A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/ras_kawintseb/', Icon: InstagramIcon },
  { label: 'Facebook', href: 'https://web.facebook.com/RasKawintsebKidaneMihiret', Icon: FacebookIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@ras_kawintseb', Icon: TikTokIcon },
]

const STREAMS = [
  { label: 'Apple Music', href: 'https://music.apple.com/us/artist/ras-kawintseb/1262657536' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/6qa9FGG9xMNaB3vEvVFKAW?si=NuknFdWNRza0XTHYkU0UPg' },
  { label: 'Deezer', href: 'https://www.deezer.com/es/artist/12944049' },
  { label: 'YouTube', href: 'https://www.youtube.com/@raskawintseb-official7001' },
]

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-gold-400/25 transition-colors hover:border-gold-400"
    >
      {children}
    </a>
  )
}

function StreamLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans font-semibold text-[#C7B9A6] no-underline transition-colors hover:text-gold-400"
      style={{ fontSize: '13px', letterSpacing: '.04em' }}
    >
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-surface-2 border-t border-gold-400/[.12] overflow-hidden">
      {/* Footprint closing signature */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: '-30px', left: '50%', transform: 'translateX(-50%)', opacity: 0.04 }}
      >
        <FootprintSVG width={160} height={260} />
      </div>

      <div className="relative z-[1] px-7 py-10 lg:px-[100px] lg:py-[54px]">
        <div className="lg:max-w-[1020px] lg:mx-auto">

          {/* ── Mobile layout ── */}
          <div className="lg:hidden">
            {/* Logo + social icons */}
            <div className="flex items-center justify-between mb-[14px]">
              <img src="/logo.png" alt="Ras Kawintseb" className="w-auto" style={{ height: '34px' }} />
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <SocialIcon key={label} href={href} label={label}><Icon /></SocialIcon>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div
              className="font-sans font-semibold uppercase text-[#9c8d7c] mb-[14px]"
              style={{ fontSize: '10px', letterSpacing: '.22em' }}
            >
              Roots Reggae Messenger
            </div>

            {/* Streaming links */}
            <div className="flex items-center flex-wrap gap-x-[18px] gap-y-2 mb-5">
              {STREAMS.map(s => <StreamLink key={s.label} {...s} />)}
            </div>

            {/* Copyright */}
            <div className="font-sans text-[#6f5e49]" style={{ fontSize: '12px', letterSpacing: '.04em' }}>
              © 2026 Ras Kawintseb
            </div>
          </div>

          {/* ── Desktop layout ── */}
          <div className="hidden lg:flex items-center justify-between gap-10 flex-wrap">
            {/* Logo + tagline */}
            <div className="flex items-center gap-[18px]">
              <img src="/logo.png" alt="Ras Kawintseb" className="w-auto" style={{ height: '40px' }} />
              <span
                className="font-sans font-semibold uppercase text-[#9c8d7c]"
                style={{ fontSize: '11px', letterSpacing: '.26em' }}
              >
                Roots Reggae Messenger
              </span>
            </div>

            {/* Streaming + divider + social */}
            <div className="flex items-center gap-[26px]">
              <div className="flex items-center gap-[18px]">
                {STREAMS.map(s => <StreamLink key={s.label} {...s} />)}
              </div>
              <span className="block w-px h-[18px] bg-gold-400/[.18]" />
              <div className="flex items-center gap-[14px]">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <SocialIcon key={label} href={href} label={label}><Icon /></SocialIcon>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="font-sans text-[#6f5e49]" style={{ fontSize: '12px', letterSpacing: '.04em' }}>
              © 2026 Ras Kawintseb
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
