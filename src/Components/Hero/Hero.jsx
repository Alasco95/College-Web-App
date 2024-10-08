import React from "react";
import './Hero.css';
import dark_arrow from '../../Asset/dark-arrow.png'

const Hero = ()=> {

    return (

        <div className="hero container">

            <div className="hero-text">
                <h1> We Ensure Better Education For a Better World</h1>
                <p>Our cutting edge curriculum is designed to empower students with knowledge and skills 
                    designed to dynamically excel in a transformative world</p>
                    <button className="btn"> Explore More<img src={dark_arrow} alt=""/></button>
            </div>

        </div>
    )
}

export default Hero;