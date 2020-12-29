import React from 'react'
import './Port.css'

function Port() {
    return (
        <div className="portfolio">
            <div className="container-fluid clearfix">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="portfolio-heading">Portfolio</div>
                                <p>Put your portfolio or gallery images here for example. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh.</p>
                            </div>
                        </div>

                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-4">
                                <div class="card bg-dark text-white">
                                    <img src="..." class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a short card.</p>
                                </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default Port
