import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SixPillars from './components/SixPillars'

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <SixPillars />
    </Router>
  )
}

export default App