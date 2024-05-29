import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar className="width:100%"/>
      <section className="flex-grow">
        <Hero />
      </section>
      
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}


export default App;
