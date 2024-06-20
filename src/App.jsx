import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Services from './pages/Services'

import BuildingAutomation from './pages/BuildingAutomation'
import PowerManagement from './pages/PowerManagement'
import SafetyandSecurity from './pages/SafetyandSecurity'
import DCIM from './pages/DCIM'

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/products/building_automation" element={<BuildingAutomation />} />
                <Route path="/products/power_management" element={<PowerManagement />} />
                <Route path="/products/safety_security" element={<SafetyandSecurity />} />
                <Route path="/products/dcim" element={<DCIM />} />
            </Routes>
            <Footer />
        </Router>
    )
}