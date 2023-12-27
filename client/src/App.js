import Nav from './Nav';
import Hero from './Hero';
import Bio from './Bio';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Testimonials from './Testimonials';
/*import Footer from './Footer';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*import './_variables.scss';*/

function App() {
    return (
        <>
            <Nav />
            <Hero />
            <hr />
            <Bio />
            <hr />
            <Projects />
            <hr />
            <Skills />
            <hr />
            <Testimonials />
            <hr />
            <Contact />
            <hr />
           {/*<Footer />*/} 
        </>
    );
}

export default App;