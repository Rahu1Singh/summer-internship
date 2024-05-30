import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Brands from './components/Brands'

export default function App() {
    return (
        <>
            <div className='absolute top-0 left-0 flex flex-col'>
                <Navbar />
			    <Hero />
                <Brands />
                <Footer />
            </div>
        </>
    )
}