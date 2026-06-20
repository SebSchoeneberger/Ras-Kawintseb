import type { ReactNode } from 'react'
import FootprintSVG from './FootprintSVG'
import { useInView } from '../hooks/useInView'

function RastaStripeLeft() {
  return (
    <div className="absolute left-0 top-0 bottom-0 flex flex-col" style={{ width: '8px' }}>
      <span className="flex-1 bg-rasta-red" />
      <span className="flex-1 bg-rasta-gold" />
      <span className="flex-1 bg-rasta-green" />
    </div>
  )
}

interface AlbumCardProps {
  eyebrow: string
  title: string
  descriptor: ReactNode
  image?: string
  spotifyId: string
  youtubeUrl: string
  appleUrl: string
  delay?: string
}

function AlbumCard({ eyebrow, title, descriptor, image, spotifyId, youtubeUrl, appleUrl, delay }: AlbumCardProps) {
  return (
    <div
      className="r-rise group/card bg-surface-card border border-gold-400/[.14] rounded-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40"
      style={{ animationDelay: delay }}
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: '1/1', background: '#160F0C' }}
      >
        {image ? (
          <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-contain transition-transform duration-500 group-hover/card:scale-105" />
        ) : (
          <>
            <FootprintSVG width={74} height={120} opacity={0.07} />
            <span
              className="absolute top-4 right-[18px] font-mono font-medium uppercase text-sand-500"
              style={{ fontSize: '10px', letterSpacing: '.16em' }}
            >
              Cover art
            </span>
          </>
        )}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{ height: '50%', background: 'linear-gradient(to top,rgba(25,18,15,.96),rgba(25,18,15,0))' }}
        />
        <div className="absolute left-6 right-6 bottom-[22px]">
          <span
            className="font-sans font-semibold uppercase text-gold-400"
            style={{ fontSize: '12px', letterSpacing: '.24em' }}
          >
            {eyebrow}
          </span>
          <h3
            className="font-serif font-normal text-sand-50 mt-2"
            style={{ fontSize: '42px', lineHeight: '1', letterSpacing: '-0.01em' }}
          >
            {title}
          </h3>
        </div>
        <RastaStripeLeft />
      </div>

      {/* Descriptor */}
      <div style={{ padding: '22px 26px 4px' }}>
        <p className="font-sans text-sand-300" style={{ fontSize: '15px', lineHeight: '1.55' }}>
          {descriptor}
        </p>
      </div>

      {/* Link rows — Spotify first, YouTube second */}
      <div className="flex flex-col" style={{ padding: '18px 26px 26px', gap: '13px' }}>
        {/* Spotify */}
        <a
          href={`https://open.spotify.com/album/${spotifyId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center rounded-card border border-gold-400/[.12] no-underline transition-colors hover:border-gold-400/40"
          style={{ gap: '15px', background: '#140D0A', padding: '13px 16px' }}
        >
          <div
            className="flex-none flex items-center justify-center rounded-full"
            style={{ width: '42px', height: '42px', background: '#1DB954', flexShrink: 0 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono font-semibold uppercase text-sand-400" style={{ fontSize: '10px', letterSpacing: '.18em', marginBottom: '4px' }}>
              Spotify
            </div>
            <div className="font-sans font-medium text-sand-200" style={{ fontSize: '13px' }}>
              Listen on Spotify
            </div>
          </div>
          <svg className="flex-none text-sand-600 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center rounded-card border border-gold-400/[.12] no-underline transition-colors hover:border-gold-400/40"
          style={{ gap: '15px', background: '#140D0A', padding: '13px 16px' }}
        >
          <div className="flex-none flex items-center justify-center" style={{ width: '42px', height: '42px' }}>
            <img src="/icons/youtube.svg" alt="" aria-hidden="true" width="42" height="42" style={{ width: '42px', height: '42px' }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono font-semibold uppercase text-sand-400" style={{ fontSize: '10px', letterSpacing: '.18em', marginBottom: '4px' }}>
              YouTube
            </div>
            <div className="font-sans font-medium text-sand-200" style={{ fontSize: '13px' }}>
              Watch on YouTube
            </div>
          </div>
          <svg className="flex-none text-sand-600 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        {/* Apple Music */}
        <a
          href={appleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center rounded-card border border-gold-400/[.12] no-underline transition-colors hover:border-gold-400/40"
          style={{ gap: '15px', background: '#140D0A', padding: '13px 16px' }}
        >
          <div className="flex-none flex items-center justify-center" style={{ width: '42px', height: '42px' }}>
            <img src="/icons/apple-music.svg" alt="" aria-hidden="true" width="42" height="42" style={{ width: '42px', height: '42px', borderRadius: '9px' }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono font-semibold uppercase text-sand-400" style={{ fontSize: '10px', letterSpacing: '.18em', marginBottom: '4px' }}>
              Apple Music
            </div>
            <div className="font-sans font-medium text-sand-200" style={{ fontSize: '13px' }}>
              Listen on Apple Music
            </div>
          </div>
          <svg className="flex-none text-sand-600 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  )
}

interface SingleCardProps {
  title: string
  feat?: string
  year: string
  image?: string
  spotifyUrl?: string
  youtubeUrl: string
  appleUrl?: string
  delay?: string
}

function SingleCard({ title, feat, year, image, spotifyUrl, youtubeUrl, appleUrl, delay }: SingleCardProps) {
  return (
    <div
      className="r-rise group/card bg-surface-card border border-gold-400/[.14] rounded-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40"
      style={{ animationDelay: delay }}
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ aspectRatio: '1/1', background: '#160F0C' }}
      >
        {image ? (
          <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-contain transition-transform duration-500 group-hover/card:scale-105" />
        ) : (
          <FootprintSVG width={38} height={62} opacity={0.07} />
        )}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{ height: '55%', background: 'linear-gradient(to top,rgba(25,18,15,.96),rgba(25,18,15,0))' }}
        />
        <div className="absolute left-4 right-4 bottom-[14px]">
          <span className="font-sans font-semibold uppercase text-gold-300" style={{ fontSize: '12px', letterSpacing: '.22em' }}>
            {year}
          </span>
          <h3 className="font-serif font-normal text-sand-50 mt-1" style={{ fontSize: '22px', lineHeight: '1.05', letterSpacing: '-0.01em' }}>
            {title}
          </h3>
          {feat && (
            <p className="font-sans text-sand-400 mt-[5px]" style={{ fontSize: '10px', letterSpacing: '.02em' }}>
              {feat}
            </p>
          )}
        </div>
        <RastaStripeLeft />
      </div>

      {/* Links */}
      <div className="flex flex-col" style={{ padding: '12px 14px 14px', gap: '8px' }}>
        {spotifyUrl && (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center rounded-card border border-gold-400/[.12] no-underline transition-colors hover:border-gold-400/40"
            style={{ gap: '10px', background: '#140D0A', padding: '9px 12px' }}
          >
            <div className="flex-none flex items-center justify-center rounded-full" style={{ width: '24px', height: '24px', background: '#1DB954' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <span className="font-sans font-medium text-sand-300" style={{ fontSize: '12px' }}>Spotify</span>
            <svg className="flex-none text-sand-600 ml-auto transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center rounded-card border border-gold-400/[.12] no-underline transition-colors hover:border-gold-400/40"
          style={{ gap: '10px', background: '#140D0A', padding: '9px 12px' }}
        >
          <div className="flex-none flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
            <img src="/icons/youtube.svg" alt="" aria-hidden="true" width="24" height="24" style={{ width: '24px', height: '24px' }} />
          </div>
          <span className="font-sans font-medium text-sand-300" style={{ fontSize: '12px' }}>YouTube</span>
          <svg className="flex-none text-sand-600 ml-auto transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        {appleUrl && (
          <a
            href={appleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center rounded-card border border-gold-400/[.12] no-underline transition-colors hover:border-gold-400/40"
            style={{ gap: '10px', background: '#140D0A', padding: '9px 12px' }}
          >
            <div className="flex-none flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
              <img src="/icons/apple-music.svg" alt="" aria-hidden="true" width="24" height="24" style={{ width: '24px', height: '24px', borderRadius: '5px' }} />
            </div>
            <span className="font-sans font-medium text-sand-300" style={{ fontSize: '12px' }}>Apple Music</span>
            <svg className="flex-none text-sand-600 ml-auto transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Music() {
  const albumsHead = useInView<HTMLDivElement>()
  const albumsGrid = useInView<HTMLDivElement>()
  const singles = useInView<HTMLDivElement>()

  return (
    <section id="music" className="relative bg-surface-1 overflow-hidden border-t border-gold-400/10 scroll-mt-16">
      <div className="noise absolute inset-0 z-[6] pointer-events-none" />

      <div className="relative z-[2] px-7 py-20 lg:px-[100px] lg:py-[128px] lg:pb-[144px]">
        {/* Header */}
        <div
          ref={albumsHead.ref}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between lg:max-w-[1080px] lg:mx-auto ${albumsHead.inView ? 'in-view' : ''}`}
          style={{ gap: '30px' }}
        >
          <div>
            <div className="flex items-center mb-6" style={{ gap: '14px' }}>
              <span className="r-line block bg-gold-400" style={{ width: '46px', height: '2px' }} />
              <span className="r-rise font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em', animationDelay: '0.15s' }}>
                Music
              </span>
            </div>
            <h2
              className="r-rise font-serif font-normal text-sand-50"
              style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.0', letterSpacing: '-0.015em', animationDelay: '0.25s' }}
            >
              Albums
            </h2>
          </div>
          {/* <p className="font-sans text-sand-400 lg:text-right lg:pb-2" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '300px' }}>
            Two releases. Press play.
          </p> */}
        </div>

        {/* Album Cards */}
        <div
          ref={albumsGrid.ref}
          className={`mt-14 lg:mt-[56px] lg:max-w-[1080px] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[36px] items-start ${albumsGrid.inView ? 'in-view' : ''}`}
        >
          <AlbumCard
            eyebrow="First Album · 2021"
            title="Touch of Tsion"
            descriptor={<>Debut album, released <span className="text-sand-50">2021</span>.</>}
            image="/TouchOfTsionAlbum.webp"
            spotifyId="0MbN49luErsrkwkeRe1BeE"
            youtubeUrl="https://youtu.be/rLUvJ_chc4w?si=Ddqrw7XTXVMk54XK"
            appleUrl="https://music.apple.com/us/album/touch-of-tsion/1595712504"
            delay="0s"
          />
          <AlbumCard
            eyebrow="Second Album · 2024"
            title="Barefoot"
            descriptor={<>Second album, released <span className="text-sand-50">2024</span>.</>}
            image="/BarefootAlbum.webp"
            spotifyId="1xhUfDIY5sUSNuQJfZE6I2"
            youtubeUrl="https://youtu.be/dR15X_2l9d0?si=ZvHR7FgyMeSmgdgt"
            appleUrl="https://music.apple.com/us/album/barefoot/1766844290"
            delay="0.12s"
          />
        </div>

        {/* Singles & EPs */}
        <div
          ref={singles.ref}
          className={`mt-[72px] lg:mt-[88px] lg:max-w-[1080px] lg:mx-auto ${singles.inView ? 'in-view' : ''}`}
        >
          <div className="flex items-center mb-6" style={{ gap: '14px' }}>
            <span className="r-line block bg-gold-400" style={{ width: '46px', height: '2px' }} />
            <span className="r-rise font-sans font-semibold uppercase text-gold-600" style={{ fontSize: '13px', letterSpacing: '.30em', animationDelay: '0.15s' }}>
              Music
            </span>
          </div>
          <h2
            className="r-rise font-serif font-normal text-sand-50 mb-10"
            style={{ fontSize: 'clamp(42px, 5vw, 62px)', lineHeight: '1.0', letterSpacing: '-0.015em', animationDelay: '0.25s' }}
          >
            Singles &amp; EPs
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
            <SingleCard
              title="Fidel"
              year="2025"
              image="/Fidel.webp"
              spotifyUrl="https://open.spotify.com/album/0YIqCZql2bWWnsMG3uGIhy"
              youtubeUrl="https://youtu.be/SlL6MT3ytwY?si=YLT3nhrlW7ki-WWy"
              appleUrl="https://music.apple.com/us/song/fidel/1789259102"
              delay="0.3s"
            />
            <SingleCard
              title="Gathering"
              feat="ft. Jah Den"
              year="2024"
              image="/Gathering.webp"
              spotifyUrl="https://open.spotify.com/album/14xhty70mW81qfSBUOnOKW"
              youtubeUrl="https://www.youtube.com/watch?v=zOK0-AgYGR0"
              appleUrl="https://music.apple.com/us/song/gathering/1774387154"
              delay="0.4s"
            />
            <SingleCard
              title="1 for Ethiopia"
              feat="ft. Fyaah Kush & others"
              year="2022"
              image="/1ForEthiopia.webp"
              spotifyUrl="https://open.spotify.com/album/4GwULjj7C8UUQjUcwJtVUy"
              youtubeUrl="https://youtu.be/KoCp7PUwuZo?si=-PSARtatze8UWkJv"
              appleUrl="https://music.apple.com/us/song/1-for-ethiopia/1649895664"
              delay="0.5s"
            />
            <SingleCard
              title="Aetiopian Citizen"
              year="2022"
              image="/AetiopianCitizen.webp"
              spotifyUrl="https://open.spotify.com/album/0LIvU7ANYYqcHbXhUhc8n4"
              youtubeUrl="https://youtu.be/FscDmrHY-4Q?si=XrgagVZsdRs3N4Au"
              appleUrl="https://music.apple.com/us/song/aetiopian-citizen/1618742277"
              delay="0.6s"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
