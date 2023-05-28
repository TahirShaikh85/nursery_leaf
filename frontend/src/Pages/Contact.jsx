import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-info">
                <div className="contact-box">
                    <h2>Email</h2>
                    <p>example@example.com</p>
                </div>
                <div className="contact-box">
                    <h2>Phone</h2>
                    <p>123-456-7890</p>
                </div>
                <div className="contact-box">
                    <h2>Address</h2>
                    <p>123 Main Street, City, Country</p>
                </div>
            </div>
            <div className="mysection" style={{display:'flex',justifyContent:'space-around',margin:"2rem 0"}}>
                <div className="contact-form">
                    <h2>Conctact us</h2>
                    <form action="">
                        <input type="text" name='name' placeholder='Enter your name' />
                        <input type="text" name='phoneno' placeholder='Enter Phone number' />
                        <textarea name="message" id="" cols="30" rows="5" placeholder='Your message'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.4615425650873!2d74.64353767508342!3d19.349158081912496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc945a0089c929%3A0x8a222967de57e9b9!2sMahatma%20Phule%20Krishi%20Vidyapeeth%20Rahuri!5e0!3m2!1sen!2sin!4v1684732972822!5m2!1sen!2sin" style={{border:"0",width:"600px",height:"450px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact