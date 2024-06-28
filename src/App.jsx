import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Contact from './pages/Contact'

import BuildingAutomationControl from './pages/BuildingAutomationControl'
import BuildingManagement from './pages/BuildingManagement'
import PowerManagement from './pages/PowerManagement'
import SafetyandSecurity from './pages/SafetyandSecurity'
import DCIM from './pages/DCIM'

import IndustrialAutomationControl from './pages/IndustrialAutomationControl'
import ChillerPlantManagement from './pages/ChillerPlantManagement'
import InformationTechnology from './pages/InformationTechnology'
import ProcessAutomation from './pages/ProcessAutomation'
import InternetofThings from './pages/InternetofThings'
import FieldDevices from './pages/FieldDevices'


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

                <Route path="/products/building_automation_control" element={<BuildingAutomationControl />} />
                <Route path="/products/building_automation_control/building_management" element={<BuildingManagement />} />
                <Route path="/products/building_automation_control/power_management" element={<PowerManagement />} />
                <Route path="/products/building_automation_control/dcim" element={<DCIM />} />
                <Route path="/products/building_automation_control/safety_security" element={<SafetyandSecurity />} />

                <Route path="/products/industrial_automation_control" element={<IndustrialAutomationControl />} />
                <Route path="/products/industrial_automation_control/process_automation" element={<ProcessAutomation />} />
                <Route path="/products/chiller_plant_management" element={<ChillerPlantManagement />} />

                <Route path="/products/information_technology" element={<InformationTechnology />} />

                <Route path="/products/internet_of_things" element={<InternetofThings />} />

                <Route path="products/field_devices" element={<FieldDevices />} />
            </Routes>
            <Footer />
        </Router>
    )
}