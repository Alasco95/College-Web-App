import React from "react";

import './Contact.css';
import msg_icon from '../../../src/Asset/msg-icon.png'
import mail_icon from '../../../src/Asset/mail-icon.png'
import phone_icon from '../../../src/Asset/phone-icon.png'
import location_icon from '../../../src/Asset/location-icon.png'
import white_arrow from '../../../src/Asset/white-arrow.png'

const Contact = () => {

    return(

        <div className="contact">

            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt=""/></h3>

                <p> Feel free to reach out through contact for or find our contact
                   information below. Your feedback, questions, and suggestions are 
                   important to us as we strive to provide exceptional service to our 
                   university community.</p>

                   <ul>
                    <li><img src={mail_icon} alt=""/>contact@edusity.edu</li>
                    <li><img src={phone_icon} alt=""/>+1 234-456-2546</li>
                    <li><img src={location_icon} alt=""/>77 New York Ave, Boston<br/> United States</li>
                   </ul>
            </div>

            <div className="contact-col">
                <form>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
                    <label>Write your message here</label>
                    <textarea name="message" id="" rows={6} placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit Now<img src={white_arrow} alt="" /></button>
                </form>
                <span>sending</span>
            </div>

        </div>
    )
}

export default Contact;