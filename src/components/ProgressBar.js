import React from 'react'
import './ProgressBar.css'

function ProgressBar(props) {
    return (
        <div>
            <div className="progress border custom-bar" style={{height:"30px"}}>
                <div className="progress-bar bg-secondary" style={{width: props.item.proficiency}}>
                    <p className="custom-text">{props.item.language}</p>                            
                </div>
                <p className="custom-text2">{props.item.proficiency}</p>
            </div>
        </div>
    )
}

export default ProgressBar
