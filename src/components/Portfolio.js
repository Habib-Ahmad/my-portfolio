import React from 'react'
import './Portfolio.css'
import ercas from '../img/ercasLogo.png'
import widi from '../img/Widi_Jalo_Logo.png'

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

                        <div className="row">
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="boxx">
                                        <img src={ercas} alt="" />
                                        <div className="content">
                                            <p>Hapiness article matters own removal nothing his forming. Gay own additions education satisfied the perpetua</p>
                                            <button type="button" className="btn btn-danger content">View Site</button>
                                        </div>                                       
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box">
                                    <div className="boxx">
                                        <img src={widi} alt="" />
                                    </div>                                    
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box">
                                    <div className="boxx">
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/hulu-2-555310.png" alt="" />
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
