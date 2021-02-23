import React from 'react'
import './body.css'
import image from '../image/FB_IMG_1613901104448.jpg'

function Body() {
    return (
        <div className="body">
            <img src={image} alt="js"/>
            <div>
            <h1 className="h">Nalwanga Patricia</h1>
            <p className="para">Very Passionate Software Developer</p>
            <p>Frontend Developer with a Full Stack Background</p>
            </div>
        </div>
    )
}

export default Body
