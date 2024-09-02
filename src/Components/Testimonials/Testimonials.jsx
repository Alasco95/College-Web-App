import React, { useRef } from "react";
import './Testimonials.css';
import next_icon from '../../Asset/next-icon.png';
import back_icon from '../../Asset/back-icon.png';
import User_1 from '../../Asset/user-1.png';
import User_2 from '../../Asset/user-2.png';
import User_3 from '../../Asset/user-3.png';
import User_4 from '../../Asset/user-4.png';

const Testimonials = () => {

    const slider = useRef();

    let tx = 0;

const slideForward = () => {

if (tx > -50){
    tx -= 25;
}

slider.current.style.transform = `translateX(${tx}%)`;

}

const slideBackward = () => {

    if (tx < 0){
        tx += 25;
    }
    
    slider.current.style.transform = `translateX(${tx}%)`;
}


    return (
        <div className="testimonials">

            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>

            <div className="Slider">
<ul ref={slider}>
    <li>
        <div className="slide"> 

        <div className="user-info">
            <img src={User_1} alt=""/>

            <div>
                <h3>Elena James</h3>
                <span>UM, USA</span>
            </div>
        </div>

        <p>Choosing to pursue y degree at UM was one of the best decisons I've
           ever made. The supportive community, state-of-the-art facilities, and commitment
          to academic excellence have truly exceeded y expectations.</p>

        </div>
    </li>

    <li>
        <div className="slide"> 

        <div className="user-info">
            <img src={User_2} alt=""/>

            <div>
                <h3>Ranjit Kotropali</h3>
                <span>UM, India</span>
            </div>
        </div>

        <p>Choosing to pursue y degree at UM was one of the best decisons I've
           ever made. The supportive community, state-of-the-art facilities, and commitment
          to academic excellence have truly exceeded y expectations.</p>

        </div>
    </li>

    <li>
        <div className="slide"> 

        <div className="user-info">
            <img src={User_3} alt=""/>

            <div>
                <h3>Elizabeth Gusto</h3>
                <span>UM, Spain</span>
            </div>
        </div>

        <p>Choosing to pursue y degree at UM was one of the best decisons I've
           ever made. The supportive community, state-of-the-art facilities, and commitment
          to academic excellence have truly exceeded y expectations.</p>

        </div>
    </li>


    <li>
        <div className="slide"> 

        <div className="user-info">
            <img src={User_4} alt=""/>

            <div>
                <h3>Alex Never</h3>
                <span>UM, Netherlands</span>
            </div>
        </div>

        <p>Choosing to pursue y degree at UM was one of the best decisons I've
           ever made. The supportive community, state-of-the-art facilities, and commitment
          to academic excellence have truly exceeded y expectations.</p>

        </div>
    </li>

</ul>

            </div>

        </div>
    )
}

export default Testimonials;