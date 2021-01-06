import React from 'react'
import './ProgressBar.css'

function ProgressBar(props) {
    return (
            <div className="progress border custom-bar">
                <div role="progressbar" className="progress-bar bg-secondary anim-progress" style={{width: props.item.proficiency}}>
                    <p className="custom-text">{props.item.language}</p>                            
                </div>
                <p className="custom-text2">{props.item.proficiency}</p>
            </div>
    )
}

export default ProgressBar
