import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__overlay">
                <div className="container">
                    <div className="row custom__row">
                            <div className="col"></div>
                            <div className="col-xs-5">
                                <p className="italic">Oh, hello there!</p>
                                <h1 className="bold">Welcome</h1>
                                <p className="italic">I'm Ahmad, I design and build user interfaces</p>                              
                            </div>
                        <div className="col"></div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
