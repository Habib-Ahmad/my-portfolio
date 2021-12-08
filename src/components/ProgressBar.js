import React, { useEffect} from 'react'
import './ProgressBar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ProgressBar(props) {

    useEffect(() => {
		Aos.init({duration: 1000})
    }, [])
    
    return (
            <div className="progress border custom-bar">
                <p className="custom-text">{props.item.language}</p>
                <div 
                    role="progressbar" 
                    className="progress-bar bg-secondary" 
                    data-aos="slide-right" 
                    data-aos-once="true" 
                    data-aos-duration="3000" 
                    style={{width: props.item.proficiency}}
                ></div>
                {/* <p className="custom-text2 anim-text2">{props.item.proficiency}</p> */}
            </div>
    )
}

export default ProgressBar
