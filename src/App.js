import Nav from './Nav';
import Hero from './Hero';
import Bio from './Bio';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './_variables.scss';

function App() {
    return (
        <>
            <Nav /> 
            <Hero />
            <hr />
            <Bio /> 
            <hr />
            <Skills />
            <hr />
           <Projects />
            <hr />
            <Resume />
            <hr />
            <Contact />
            <hr />
            <Footer />
        </>
    );
}

export default App;