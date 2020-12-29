import React from 'react'
import './Services.css'
import coding from '../img/coding.png'
import ui from '../img/ui.png'
import wordpress from '../img/wordpress.png'

function Services() {
    return (
        <div id="services" className="services">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="service-heading">Services</div>
								<div className="row">
									<div className="col-md-4 col-sm-12">
										<div className="services-box">
											
											<img src={coding} alt="" />											
											<h5>Front-End Development</h5>
											<p>I build responsive websites to optimize user experience and enjoy bringing ideas to life in the browser.</p>
										</div>
									</div>

									<div className="col-md-4 col-sm-12">
										<div className="services-box">											
											<img src={ui} alt="" />											
											<h5>UI / UX Design</h5>
											<p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
										</div>
									</div>

									<div className="col-md-4 col-sm-12">
										<div className="services-box">											
											<img src={wordpress} alt="" />											
											<h5>WordPress Websites</h5>
											<p>Manage your website using the web's most popular content management system.</p>
										</div>
									</div>									
								</div>
						</div>
						</div>
					</div>
        </div>
    )
}

export default Services
