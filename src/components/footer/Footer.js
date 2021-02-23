import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="about">
                <h2>About me</h2>
                <p>I beleive with tech we can change lifes by solving problems that we face as a community</p>
                <p>I attended the OutBox BootCamp where I learnt full stack development but I have much interest in Frontend Development</p>
                <p>We can get in touch by clicking on contacts</p>
                
            </div>
            <div className="contact">
            <h3>Contacts</h3>
                <p><i className="fa fa-twitter"> Twitter</i></p>
                <p><i className="fa fa-linkedin"> LinkedIn</i></p>
                <p><i className="fa fa-whatsapp"> Whatsapp</i></p>
            </div>
        </div>
    )
}

export default Footer
