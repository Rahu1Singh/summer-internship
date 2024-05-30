import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Brands from './components/Brands'
import Carousel from './components/Carousel'

export default function App() {
    return (
        <>
            <div className='bg-b-100 absolute top-0 left-0 flex flex-col'>
                <Navbar />
                <Hero />
                <Carousel />
                <Brands />
                
                <Footer />
            </div>
        </>
    )
}