import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div >
        <div id="contact" className="contact" >
            <div className="container-fluid clearfix">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="contact-heading">Contact</div>
                            </div>
                        </div>

                        <form>
                            <div class="row">
                                <div class="form-group col-md-3 offset-2">
                                    <label>First Name*</label>
                                    <input type="text" class="form-control" placeholder="Enter your firstname" />
                                </div>
                                <div class="form-group col-md-3">
                                    <label>Last Name*</label>
                                    <input type="text" class="form-control" placeholder="Enter your lastname" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6 offset-2">
                                    <label>E-mail*</label>
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6 offset-2">
                                    <label>Your message for us*</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6 offset-2">
                                    <input type="submit" name="name" value="Send message" class="btn btn-outline-dark    btn-block" />
                                </div>
                            </div>
                        </form>

                        </div>
                </div>
            </div>
       </div>
       </div>
    )
}

export default Contact
