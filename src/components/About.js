import React, { useEffect } from 'react'
import './About.css'
import ProgressData from './ProgressData'
import ProgressBar from './ProgressBar.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
import photo from '../img/photo.jpg'

function About() {

    useEffect(() => {
		Aos.init({duration: 1000})
	}, [])

    const bars = ProgressData.map(item => 
        <ProgressBar key={item.id} item={item}/>
    )

    return (
        <div id="about" className="container-fluid">
            <div className="row about-custom-row">
                
                <div
                    className="col-sm-12 col-md-6 left-col"
                    data-aos="fade-right" 
                    data-aos-once="true"
                >
                        <img className="my-img" src={photo} alt=".."/>
                        <h3>Who I am</h3>
                        <hr data-aos="fade-left" data-aos-duration="1500" data-aos-once="true"/>
                        <p>I'm a design oriented front-end developer. I love creating immersive, UI / UX<br /><br />I am a well-organized person and problem solver with great attention to detail. I'm interested in working wth ambitious and positive people.</p>
                </div>

                <div
                    className="col-sm-12 col-md-6 right-col"
                    data-aos="fade-left" 
                    data-aos-once="true"
                >
                    {bars}
                </div>
            </div>
        </div>
    )
}

export default About