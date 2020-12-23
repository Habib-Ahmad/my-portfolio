import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div className="">
            <div className="row no-gutters">
                <div className="col-12">
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
                            <a className="nav-item nav-link custom-item active" href="#">Home<span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link custom-item" href="#">About</a>
                            <a className="nav-item nav-link custom-item" href="#">Services</a>
                            <a className="nav-item nav-link custom-item" href="#">Portfolio</a>
                            <a className="nav-item nav-link custom-item" href="#">Text</a>
                            <a className="nav-item nav-link custom-item" href="#">Contact</a>
                            </div>
                        </div>
                        </nav>
                    </div>
            </div>
        </div>
    )
}

export default NavBar
