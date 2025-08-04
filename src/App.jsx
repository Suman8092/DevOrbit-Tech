import Hero from './components/Hero';
import Services from './components/Services';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ScrollIndicator from "./components/ScrollIndicator";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import ComingSoon from "./components/ComingSoon";

function App() {
return (

<main className="bg-black">
<Hero />
<Services />
<Navbar />
<About />
<Contact />
<Portfolio />
<Testimonials/>
<ScrollIndicator />
<Footer/>
<BackToTop />
<Loader />




</main>

);
}

export default App;