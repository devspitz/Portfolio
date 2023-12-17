import logo from './assets/logo.png';

export default function Nav() {

    return (
        <div className='navWrapper'>
            <div className="logo">
                <img src={logo} alt="logo" width="100%" />
            </div>
            <ul className="nav">
                <li>
                    <a href="#bio">Bio</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}