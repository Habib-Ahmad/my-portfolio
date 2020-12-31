import React from 'react'
import './Portfolio.css'
import ercas from '../img/ercasLogo.png'
import widi from '../img/Widi_Jalo_LogoR.png'
import hulu from '../img/huluLogo.png'

function Portfolio() {
    return (
       <div id="portfolio" className="portfolio">
            <div className="container-fluid clearfix">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="portfolio-heading">Portfolio</div>
                                <p className="portfolio-text">Here are a few of my recent projects</p>
                            </div>
                        </div>

                        <div className="row sp">
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img src={ercas} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>The simplest way to make and receive payments</p>
                                            <a href="#" type="button" className="btn custom-btn">Visit Website</a>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img className="extra-css" src={widi} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>A non-profitorganisation that engages in various charitable works across Nigeria</p>
                                            <a href="#" type="button" className="btn btn-info">Visit Website</a>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box">
                                    <div className="boxx">
                                        <div className="img-box">
                                            <img src={hulu} alt="" />
                                        </div>
                                        <div className="content">
                                            <p>A clone of one of the most popular movie services</p>
                                            <a href="#" type="button" className="btn btn-info">Visit Website</a>
                                        </div>                                       
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
