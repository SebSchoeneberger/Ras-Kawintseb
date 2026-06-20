import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Music from './components/Music'
import Watch from './components/Watch'
import Gallery from './components/Gallery'
import Performances from './components/Performances'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-surface font-sans">
      <Navbar />
      <Hero />
      <Story />

      <Music />
      <Watch />

      <Gallery />

      <Performances />

      <Booking />

      <Footer />
    </div>
  )
}
