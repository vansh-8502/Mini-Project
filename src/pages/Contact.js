import React from 'react'
import '../styles/Contact.css'
import contactImage from '../ImagesLogos/contact.jpg'
function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${contactImage})`}}>
                
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <lable htmlFor='name'>Full Name</lable>
                    <input name="name" type="text" placeHolder="Enter Your Name"/>
                    <lable htmlFor='email'>Email</lable>
                    <input name="name" type="email" placeHolder="Enter Email Address"/>
                    <lable htmlFor='message'>Message</lable>
                    <textarea name="message" rows="7" placeholder="Enter Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
        </div>
        </div>
    )
}

export default Contact
