import React, { useEffect } from 'react'
import './Services.css'
import coding from '../img/coding.png'
import ui from '../img/ui.png'
import wordpress from '../img/wordpress.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {

	useEffect(() => {
		Aos.init({duration: 1000})
	}, [])
	
    return (
        <div id="services" className="services">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="services-heading" data-aos="zoom-out-down" data-aos-once="true">Services</div>
									<div className="row" data-aos="fade-up"  data-aos-once="true">
										<div className="col-md-4 col-sm-12">
											<div className="services-box">
												
												<img src={coding} alt="coding illustartion" />											
												<h5>Front-End Development</h5>
												<p>I build responsive websites to optimize user experience and enjoy bringing ideas to life in the browser.</p>
											</div>
										</div>

										<div className="col-md-4 col-sm-12">
											<div className="services-box" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">											
												<img src={ui} alt="UI illustartion" />											
												<h5>UI / UX Design</h5>
												<p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
											</div>
										</div>

										<div className="col-md-4 col-sm-12">
											<div className="services-box" data-aos="fade-up" data-aos-duration="1900" data-aos-once="true">											
												<img src={wordpress} alt="wordpress illustartion" />											
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
