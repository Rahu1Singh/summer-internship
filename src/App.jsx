import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
// import CarouselBasicExample from './components/Carousel';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar className="width:100%"/>
      <section className="flex-grow">
        {/* <Hero /> */}
         <AboutUs /> 
      </section>
      {/* <section className="flex-grow">
        <CarouselBasicExample />
      </section> */}
      
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}


export default App;
