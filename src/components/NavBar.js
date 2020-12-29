import React from 'react'
import './NavBar.css'

function NavBar() {
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
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav custom-nav">
                        <a className="nav-item nav-link custom-item" href="">Home</a>
                        <a className="nav-item nav-link custom-item" href="#about">About</a>
                        <a className="nav-item nav-link custom-item" href="#services">Services</a>
                        <a className="nav-item nav-link custom-item" href="#portfolio">Portfolio</a>
                        <a className="nav-item nav-link custom-item" href="#contact">Contact</a>
                        </div>
                    </div>
            </nav>
        </div>        
    )
}

export default NavBar

