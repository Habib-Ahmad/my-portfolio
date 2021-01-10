import React, { useState} from 'react'
import './Contact.css'

function Contact() {

    const [valid, setvalid] = useState("valid")

    return (
        <div id="contact" className="contact">
            <div className="container-fluid">
                <div className="row">                            
                    <div className="col-12" style={{paddingLeft: "0vw"}}>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="contact-heading" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">Contact</div>
                            </div>
                        </div>

                        <form
                            className="needs-validation"
                            data-aos="zoom-out-left"
                            data-aos-once="true"
                            noValidate
                        >
                            <div class="row">
                                <div class="form-group col-md-3">
                                    <label for="firstname">First Name*</label>
                                    <input type="text" name="firstname" id="firstname" className="form-control" placeholder="Enter your firstname" required/>
                                    <div></div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="lastname">Last Name*</label>
                                    <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Enter your lastname" required/>
                                    <div ></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="email">E-mail*</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required/>
                                    <div ></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="message">Your message for me*</label>
                                    <textarea name="message" id="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message" required></textarea>
                                    <div ></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <input type="" value="Send message" className="btn btn-outline-dark btn-block" />
                                </div>
                            </div>
                        </form>

                        </div>
                </div>
            </div>
       </div>
    )
}

export default Contact
