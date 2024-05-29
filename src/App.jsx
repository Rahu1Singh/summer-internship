import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
    return (
        <div className='flex flex-wrap'>
            <Navbar />
			<Hero />
        </div>
    )
}