import { useState } from 'react'

const NAV_LINKS = [
  { href: '#story', label: 'Story' },
  { href: '#music', label: 'Music' },
  { href: '#watch', label: 'Watch' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#live', label: 'Live' },
  { href: '#booking', label: 'Bookings' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-7 md:px-14 bg-surface border-b border-gold-400/10">
        <a href="#hero" className="flex-none" onClick={() => setOpen(false)}>
          <img src="/logo.webp" alt="Ras Kawintseb" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: '30px' }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-sans font-semibold uppercase text-sand-100 hover:text-gold-400 no-underline transition-colors"
              style={{ fontSize: '13px', letterSpacing: '.06em' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-gold-400 hover:bg-gold-300 text-surface font-bold uppercase no-underline rounded-sharp transition-colors"
            style={{ padding: '11px 22px', fontSize: '13px', letterSpacing: '.04em' }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile: Book Now + hamburger */}
        <div className="md:hidden flex items-center" style={{ gap: '12px' }}>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="bg-gold-400 text-surface font-bold uppercase no-underline rounded-sharp"
            style={{ padding: '10px 18px', fontSize: '12px', letterSpacing: '.06em' }}
          >
            Book Now
          </a>
        <button
          className="relative flex items-center justify-center w-10 h-10 text-sand-100"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`} />
          <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`} />
        </button>
        </div>
      </header>

      {/* Mobile dropdown panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-surface border-b border-gold-400/10 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col px-7 pt-2 pb-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-sans font-semibold uppercase text-sand-100 hover:text-gold-400 no-underline transition-colors py-4 ${i < NAV_LINKS.length - 1 ? 'border-b border-gold-400/10' : ''}`}
              style={{ fontSize: '13px', letterSpacing: '.06em' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-6 bg-gold-400 hover:bg-gold-300 text-surface font-bold uppercase no-underline rounded-sharp text-center transition-colors"
            style={{ padding: '14px 22px', fontSize: '13px', letterSpacing: '.04em' }}
          >
            Book Now
          </a>
        </nav>
      </div>

      {/* Backdrop — closes menu on outside tap */}
      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
