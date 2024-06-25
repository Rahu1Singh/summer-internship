import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import BuildingAutomationControl from './pages/BuildingAutomationControl'
import Contact from './pages/Contact'
import Services from './pages/Services'

import BuildingManagement from './pages/BuildingManagement'
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
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/products/building_automation_control" element={<BuildingAutomationControl />} />
                <Route path="/products/building_automation_control/building_management" element={<BuildingManagement />} />
                <Route path="/products/building_automation_control/power_management" element={<PowerManagement />} />
                <Route path="/products/building_automation_control/dcim" element={<DCIM />} />
                <Route path="/products/building_automation_control/safety_security" element={<SafetyandSecurity />} />
            </Routes>
            <Footer />
        </Router>
    )
}