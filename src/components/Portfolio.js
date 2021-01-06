import React, { useEffect } from 'react'
import './Portfolio.css'
import ercas from '../img/ercasLogo.png'
import widi from '../img/Widi_Jalo_Logo.png'
import hulu from '../img/huluLogo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Portfolio() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
       <div id="portfolio" className="portfolio">
            <div className="container-fluid clearfix">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div
                                    className="portfolio-heading"
                                    data-aos="fade-left"
                                    data-aos-once="true"
                                >
                                        Portfolio
                                </div>
                                <p className="portfolio-text" data-aos="slide-down" data-aos-duration="500" data-aos-once="true">Here are a few of my recent projects</p>
                            </div>
                        </div>

                        <div className="row" data-aos="zoom-in-down" data-aos-once="true">
                            <div className="col-md-4">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img src={ercas} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>The simplest way to make and receive payments</p>
                                            <a href="https://ercas.com.ng/" target="_blank" type="button" className="btn custom-btn">Visit Website</a>
                                        </div>                                       
                                    </div>
                            </div>

                            <div className="col-md-4">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img className="extra-css" src={widi} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>A non-profit organisation engaged in charitable works across Nigeria</p>
                                            <a href="https://widijalofoundation.com/" target="_blank" type="button" className="btn custom-btn">Visit Website</a>
                                        </div>                                       
                                    </div>
                            </div>

                            <div className="col-md-4">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img src={hulu} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>A clone of one of the most popular streaming services</p>
                                            <a href="https://hulu-clone-e6e67.web.app/" target="_blank" type="button" className="btn custom-btn">Visit Website</a>
                                        </div>                                       
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Portfolio
