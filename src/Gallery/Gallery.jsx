import React from "react";
import '../Gallery/Gallery.css'
import gallery_1 from '../../src/Asset/gallery-1.png';
import gallery_2 from '../../src/Asset/gallery-2.png';
import gallery_3 from '../../src/Asset/gallery-3.png';
import gallery_4 from '../../src/Asset/gallery-4.png';
import white_arrow from '../../src/Asset/white-arrow.png';

const Gallery = () => {
    return(

        <div className="campus">

        <div className ="gallery">

        <img src={gallery_1} alt="" />;
        <img src={gallery_2} alt="" />;
        <img src={gallery_3} alt="" />;
        <img src={gallery_4} alt="" />;

        </div>

        <button className="btn dark-btn">See More<img src={white_arrow} alt="" /> </button>

         </div>

    )
}


export default Gallery;