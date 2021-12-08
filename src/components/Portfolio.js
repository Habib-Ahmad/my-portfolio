import React, { useEffect } from 'react'
import './Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ercas from '../img/ercasLogo.png'
import hulu from '../img/huluLogo.png'
import invoice from '../img/invoice.svg'
import airbnb from '../img/airbnb2.png'
// import widi from '../img/Widi_Jalo_Logo.png'
// import aventine from '../img/aventineLogo.png'

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
                                <p className="portfolio-text" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">Here are a few of my projects</p>
                            </div>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-once="true">
                            <div className="col-md-4">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img src={ercas} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>The simplest way to make and receive payments</p>
                                            <a href="https://ercas.com.ng/" target="_blank" rel="noreferrer" type="button" className="btn custom-btn">Visit Website</a>
                                        </div>                                       
                                    </div>
                            </div>

                            <div className="col-md-4">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img style={{marginLeft: '43px'}} src="logo512.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <p>An early version of a HMS I am legally allowed to display</p>
                                            <a href="https://aceassist-app.web.app/" target="_blank" rel="noreferrer" type="button" className="btn custom-btn">Visit Website</a>
                                        </div>                                       
                                    </div>
                            </div>                            

                            <div className="col-md-4">
                                <div className="boxx">
                                    <div className="img-box">
                                        <img style={{marginLeft: '43px'}} src={invoice} alt="" />
                                    </div>
                                    <div className="content">
                                        <p>A clone of one of the most popular streaming services</p>
                                        <a href="https://hulu-clone-e6e67.web.app/" target="_blank" rel="noreferrer" type="button" className="btn custom-btn">Visit Website</a>
                                    </div>                                       
                                </div>
                            </div>

                        </div>

                        <div className="row" data-aos="fade-up" data-aos-once="true">
                            <div className="col-md-4">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img src={airbnb} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>A demo of the popular lodging company, Airbnb</p>
                                            <a href="https://airbnb-clone-e6e67.web.app/" target="_blank" rel="noreferrer" type="button" className="btn custom-btn">Visit Website</a>
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
                                        <a href="https://hulu-clone-e6e67.web.app/" target="_blank" rel="noreferrer" type="button" className="btn custom-btn">Visit Website</a>
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
