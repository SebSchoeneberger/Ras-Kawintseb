import { useState } from 'react'
import type { ReactNode, FormEvent } from 'react'
import FootprintSVG from './FootprintSVG'
import { useInView } from '../hooks/useInView'

interface FormData {
  name: string
  email: string
  org: string
  date: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

const EMPTY: FormData = { name: '', email: '', org: '', date: '', message: '' }

const FORMATS = [
  { title: 'Full Band', desc: 'With the Aetio+PHrika Reggaestra — the complete roots-reggae lineup.' },
  { title: 'Acoustic', desc: 'Acoustic roots with a 2–3 piece ensemble.' },
  { title: 'Solo', desc: 'Ras Kawintseb performing on his own.' },
]

const TRANSITION = { transition: 'border-color .18s, background .18s, box-shadow .18s' }

function validate(d: FormData): FieldErrors {
  const e: FieldErrors = {}
  if (!d.name.trim()) e.name = 'Please enter your name'
  if (!d.email.trim()) e.email = 'Please enter your email'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email'
  if (!d.message.trim()) e.message = 'Please describe the event'
  return e
}

function inputCls(value: string, hasError: boolean): string {
  const base = 'w-full rounded-card outline-none font-sans text-sand-50 border-[1.5px] text-[16px] px-4 py-[14px]'
  if (hasError) return `${base} bg-[#1A120D] border-red-500`
  const state = value ? 'bg-[#221913] border-gold-400/[.28]' : 'bg-[#1A120D] border-gold-400/[.14]'
  return `${base} ${state} focus:border-gold-400 focus:bg-[#271d16] focus:shadow-[0_0_0_3px_rgba(240,174,30,.14)]`
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div className="group">
      <label>
        <span
          className="block font-sans font-semibold uppercase text-[#9c8d7c] group-focus-within:text-gold-400 transition-colors duration-[180ms] mb-[9px]"
          style={{ fontSize: '11px', letterSpacing: '.18em' }}
        >
          {label}
        </span>
        {children}
      </label>
      {error && (
        <p className="mt-[6px] font-sans text-red-400" style={{ fontSize: '12px' }}>
          {error}
        </p>
      )}
    </div>
  )
}

export default function Booking() {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const head = useInView<HTMLDivElement>()
  const body = useInView<HTMLDivElement>()

  function set(key: keyof FormData) {
    return ({ target: { value } }: { target: { value: string } }) => {
      setForm(f => ({ ...f, [key]: value }))
      if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="booking" className="relative bg-surface overflow-hidden border-t border-gold-400/10 scroll-mt-16">
      <div className="noise absolute inset-0 z-[6] pointer-events-none" style={{ opacity: 0.12 }} />
      <div className="absolute pointer-events-none z-0" style={{ right: '-60px', bottom: '-90px', opacity: 0.04 }}>
        <FootprintSVG width={400} height={650} />
      </div>

      <div className="relative z-[2] px-7 py-20 lg:px-[100px] lg:py-[128px] lg:pb-[140px]">
        <div className="lg:max-w-[1020px] lg:mx-auto">

          <div ref={head.ref} className={head.inView ? 'in-view' : ''}>
            {/* Header */}
            <div className="flex items-center mb-6" style={{ gap: '14px' }}>
              <span className="r-line block bg-gold-400 w-[30px] lg:w-[46px]" style={{ height: '2px' }} />
              <span
                className="r-rise font-sans font-semibold uppercase text-gold-600"
                style={{ fontSize: '13px', letterSpacing: '.30em', animationDelay: '0.15s' }}
              >
                Bookings
              </span>
            </div>
            <h2
              className="r-rise font-serif font-normal text-sand-50"
              style={{ fontSize: 'clamp(38px, 5vw, 58px)', lineHeight: '1.0', letterSpacing: '-0.015em', animationDelay: '0.25s' }}
            >
              Book Ras Kawintseb
            </h2>
            <p
              className="r-rise font-sans text-sand-300 mt-[14px] lg:mt-[18px]"
              style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '520px', animationDelay: '0.35s' }}
            >
              Promoters and venues — send the details below and we'll respond within a few days.
            </p>

            {/* Performance formats */}
            <div className="mt-9 lg:mt-[42px]">
              <div
                className="r-rise font-sans font-semibold uppercase text-[#9c8d7c] mb-[14px]"
                style={{ fontSize: '11px', letterSpacing: '.22em', animationDelay: '0.45s' }}
              >
                Available as
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-[14px]">
                {FORMATS.map((f, i) => (
                  <div
                    key={f.title}
                    className="r-rise bg-surface-1 border border-gold-400/[.12] rounded-card"
                    style={{ padding: '18px 20px', animationDelay: `${0.52 + i * 0.08}s` }}
                  >
                    <span className="block bg-gold-400/70 mb-[13px]" style={{ width: '22px', height: '2px' }} />
                    <div className="font-serif font-normal text-sand-50" style={{ fontSize: '19px', lineHeight: '1.1' }}>
                      {f.title}
                    </div>
                    <div className="font-sans text-sand-400 mt-[7px]" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div ref={body.ref} className={`grid grid-cols-1 gap-10 mt-10 items-start lg:grid-cols-[1fr_332px] lg:gap-[54px] lg:mt-[50px] ${body.inView ? 'in-view' : ''}`}>

            {/* Form or success state */}
            {submitted ? (
              <div className="r-rise flex flex-col items-start gap-5 py-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-gold-400/40 bg-gold-400/[.08]">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                    <path d="M1 8L7 14L19 2" stroke="#F0AE1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif font-normal text-sand-50" style={{ fontSize: '28px', lineHeight: '1.1' }}>
                    Thanks — we'll be in touch.
                  </h3>
                  <p className="font-sans text-sand-400 mt-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    We usually respond within a few days.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm(EMPTY); setErrors({}) }}
                  className="font-mono font-medium uppercase text-[#9c8d7c] hover:text-sand-400 transition-colors mt-1"
                  style={{ fontSize: '11px', letterSpacing: '.18em' }}
                >
                  Send another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="r-rise flex flex-col gap-[22px]">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-2">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set('name')}
                      className={inputCls(form.name, !!errors.name)}
                      style={TRANSITION}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set('email')}
                      className={inputCls(form.email, !!errors.email)}
                      style={TRANSITION}
                    />
                  </Field>
                </div>

                {/* Organization + Event Date */}
                <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-2">
                  <Field label="Organization / Venue" error={errors.org}>
                    <input
                      type="text"
                      placeholder="Venue or festival"
                      value={form.org}
                      onChange={set('org')}
                      className={inputCls(form.org, !!errors.org)}
                      style={TRANSITION}
                    />
                  </Field>
                  <Field label="Event Date" error={errors.date}>
                    <input
                      type="text"
                      placeholder="Approx. date or period"
                      value={form.date}
                      onChange={set('date')}
                      className={inputCls(form.date, !!errors.date)}
                      style={TRANSITION}
                    />
                  </Field>
                </div>

                {/* Message */}
                <Field label="Message" error={errors.message}>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the event, location, audience and budget."
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputCls(form.message, !!errors.message)} resize-y`}
                    style={{ ...TRANSITION, lineHeight: '1.55' }}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full lg:w-auto lg:self-start mt-[6px] inline-flex items-center justify-center gap-[11px] bg-gold-400 text-surface font-sans font-bold rounded-sharp cursor-pointer transition-all hover:bg-[#F8BE1C] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(240,174,30,.28)]"
                  style={{ padding: '17px 34px', fontSize: '15px', letterSpacing: '.01em' }}
                >
                  Send Booking Request
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden="true">
                    <path d="M1 6H13M8.5 1.5L13 6L8.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}

            {/* Contact fallback */}
            <div className="r-rise bg-surface-1 border border-gold-400/[.12] rounded-card" style={{ padding: '30px 28px', animationDelay: '0.12s' }}>
              <div
                className="font-sans font-semibold uppercase text-[#9c8d7c] mb-[22px]"
                style={{ fontSize: '11px', letterSpacing: '.22em' }}
              >
                Or reach us directly
              </div>

              <div className="flex flex-col gap-5">
                <a href="mailto:associationtousdesartistes@hotmail.com" className="flex items-center gap-[14px] no-underline group">
                  <span className="flex-none w-[38px] h-[38px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors group-hover:border-gold-400/60">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#F0AE1E" strokeWidth="1.6" />
                      <path d="M3 5L10 11L17 5" stroke="#F0AE1E" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-sans font-semibold uppercase text-[#7d6f60]" style={{ fontSize: '11px', letterSpacing: '.1em' }}>Email</span>
                    <span className="block font-sans font-medium text-sand-50 break-all" style={{ fontSize: '15px' }}>associationtousdesartistes@hotmail.com</span>
                  </span>
                </a>

                <a href="https://wa.me/251910970103" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[14px] no-underline group">
                  <span className="flex-none w-[38px] h-[38px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors group-hover:border-gold-400/60">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M10 2.5A7.5 7.5 0 003.5 13.8L2.5 17.5L6.3 16.5A7.5 7.5 0 1010 2.5Z" stroke="#F0AE1E" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-sans font-semibold uppercase text-[#7d6f60]" style={{ fontSize: '11px', letterSpacing: '.1em' }}>WhatsApp</span>
                    <span className="font-sans font-medium text-sand-50" style={{ fontSize: '15px' }}>+251 91 097 0103</span>
                  </span>
                </a>

                <a href="tel:+251910970103" className="flex items-center gap-[14px] no-underline group">
                  <span className="flex-none w-[38px] h-[38px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors group-hover:border-gold-400/60">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 3H7L8.5 7L6.5 8.5A10 10 0 0011.5 13.5L13 11.5L17 13V16A1.5 1.5 0 0115.5 17.5A13.5 13.5 0 012.5 4.5A1.5 1.5 0 014 3Z" stroke="#F0AE1E" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-sans font-semibold uppercase text-[#7d6f60]" style={{ fontSize: '11px', letterSpacing: '.1em' }}>Phone</span>
                    <span className="font-sans font-medium text-sand-50" style={{ fontSize: '15px' }}>+251 91 097 0103</span>
                  </span>
                </a>

                {/* <a href="https://t.me/+251910970103" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[14px] no-underline group">
                  <span className="flex-none w-[38px] h-[38px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors group-hover:border-gold-400/60">
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M18 3L9 11M18 3L12.5 18L9 11L2 7.5L18 3Z" stroke="#F0AE1E" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-sans font-semibold uppercase text-[#7d6f60]" style={{ fontSize: '11px', letterSpacing: '.1em' }}>Telegram</span>
                    <span className="font-sans font-medium text-sand-50" style={{ fontSize: '15px' }}>091 097 0103</span>
                  </span>
                </a> */}
              </div>

              {/* Social media */}
              <div className="mt-7 pt-6 border-t border-gold-400/[.10]">
                <div
                  className="font-sans font-semibold uppercase text-[#9c8d7c] mb-[14px]"
                  style={{ fontSize: '11px', letterSpacing: '.22em' }}
                >
                  Follow
                </div>
                <div className="flex items-center justify-between mx-auto" style={{ maxWidth: '230px' }}>
                  <a
                    href="https://www.instagram.com/ras_kawintseb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex-none w-[42px] h-[42px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors hover:border-gold-400/60 hover:bg-gold-400/[.08]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F0AE1E" aria-hidden="true">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/RasKawintsebKidaneMihiret"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex-none w-[42px] h-[42px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors hover:border-gold-400/60 hover:bg-gold-400/[.08]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F0AE1E" aria-hidden="true">
                      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@ras_kawintseb"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex-none w-[42px] h-[42px] flex items-center justify-center rounded-full border border-gold-400/30 transition-colors hover:border-gold-400/60 hover:bg-gold-400/[.08]"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#F0AE1E" aria-hidden="true">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-[26px] flex h-[4px] rounded-sharp overflow-hidden">
                <span className="flex-1 bg-rasta-red" />
                <span className="flex-1 bg-rasta-gold" />
                <span className="flex-1 bg-rasta-green" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
