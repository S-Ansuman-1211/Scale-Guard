import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Applications from './pages/Applications'
import Benefits from './pages/Benefits'
import Projects from './pages/Projects'
import Consultants from './pages/Consultants'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
