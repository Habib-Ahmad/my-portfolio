import React, { useState} from 'react'
import './NavBar.css'
import MenuIcon from '@material-ui/icons/Menu';

function NavBar() {

    const [active, setActive] = useState("home-menu")
    
    return (
        <div className="custom-navbar sticky-top">
            <nav className="navbar navbar-expand-lg">
                    <button
                        className="navbar-toggler custom-btn"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                            <MenuIcon style={{fontSize: "1.5rem"}} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav custom-nav">
                        <a onClick={() => setActive("home-menu")} className={`nav-item nav-link custom-item ${active=="home-menu" ? "active-item" : ""}`} id="home-menu" href="">Home</a>
                        <a onClick={() => setActive("about-menu")} className={`nav-item nav-link custom-item ${active=="about-menu" ? "active-item" : ""}`} id="about-menu" href="#about">About</a>
                        <a onClick={() => setActive("services-menu")} className={`nav-item nav-link custom-item ${active=="services-menu" ? "active-item" : ""}`} id="services-menu" href="#services">Services</a>
                        <a onClick={() => setActive("portfolio-menu")} className={`nav-item nav-link custom-item ${active=="portfolio-menu" ? "active-item" : ""}`} id="portfolio-menu" href="#portfolio">Portfolio</a>
                        <a onClick={() => setActive("contact-menu")} className={`nav-item nav-link custom-item ${active=="contact-menu" ? "active-item" : ""}`} id="contact-menu" href="#contact">Contact</a>
                        </div>
                    </div>
            </nav>
        </div>        
    )
}

export default NavBar

