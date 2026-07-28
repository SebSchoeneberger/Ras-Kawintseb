import { PERFORMANCES } from '../data/performances'

// Emits Google MusicEvent structured data for upcoming shows.
// Renders nothing until a performance in data/performances.ts has a future
// `startDate` (and a `location` — Google requires a venue for event results).
export default function EventSchema() {
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = PERFORMANCES.filter(
    (p) => p.startDate && p.startDate >= today && p.location,
  )
  if (upcoming.length === 0) return null

  const json = {
    '@context': 'https://schema.org',
    '@graph': upcoming.map((p) => ({
      '@type': 'MusicEvent',
      name: p.title,
      startDate: p.startDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@type': 'Place', name: p.location, address: p.location },
      performer: {
        '@type': 'MusicGroup',
        '@id': 'https://raskawintseb.com/#artist',
        name: 'Ras Kawintseb',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
