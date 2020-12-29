import React, { Component } from 'react'
import './About.css'
import ProgressData from './ProgressData'
import ProgressBar from './ProgressBar.js'

export default class About extends Component {
    constructor(){
        super()
        this.state={
            progress: ProgressData
        }
    }

    render() {
        const pp = this.state.progress.map(item => 
        <ProgressBar key={item.id} item={item}/>);
        console.log(pp)

        return (
            <div id="about" className="container-fluid">
                <div className="row custom-row">
                    <div className="col-sm-12 col-md-6 left-col">
                        {pp}
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="right-col">
                            <img className="" src="logo192.png" alt=".."/>
                            <h3>Who I am</h3>
                            <hr className="dotted"/>
                            <p>My name is Ahmad. I'm a design oriented front-end developer. I love creating immersive, UI / UX<br /><br />I am a well-organized person and problem solver with great attention to detail. I'm interested in working wth ambitious and positive people.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
