import React from "react";
import './About.css';
import About_img from '../../Asset/about.png';
import Play_icon from '../../Asset/play-icon.png';
const About = ({SetPlayState}) => {

    return (
        <div className="about">
 
            <div className="about-left">
                <img src={About_img} alt="" className="about-img"/>
                <img src={Play_icon} alt="" className="play-icon" onClick={()=> {SetPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrows Leaders Today</h2>
                <p>
                Embark on transformative educational ourney with our university's comprehensive education programmes. 
                our cuuting-edge curriculum is designed to empower students with the knowledge, skills, and experiences
                needed to excel in the dynamic field of education.
                </p>

                <p>
                With a focus on innovation, hands-on learning, and personalized mentorship, our programmes prepare aspiring educators to 
                 make a meaningful impact in classrooms, schools, and communities.
                </p>

                <p>
                Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programmes
                offers the perfect pathway to achieve your goals and unlock your full potential.  
                </p>

            </div>

        </div>
    )
}

export default About;   