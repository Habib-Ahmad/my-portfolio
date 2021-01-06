import React, {useState, useEffect} from 'react'
import './Header.css'
import Particle from './Particle'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header() {


    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])   
    

    return (        
        <div className="header">
            <div className="header-overlay">
                <div className="particle" ><Particle /></div>
                <div className="container">
                    <div className="row header-cutom-row">
                            <div className="col"></div>
                            <div className="col-lg-5">
                                <p className="header-line1 anim-typewriter">Hello, I'm Ahmad</p>
                                <h1
                                    className="header-line2"
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    data-aos-delay="3000"
                                >
                                    I'm a web developer
                                </h1>
                            </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
