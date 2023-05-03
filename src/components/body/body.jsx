import React, { useState, useEffect } from 'react';
import './body.scss';
import StockImg from '../../assets/stockImg.webp';
import StockImg2 from '../../assets/StockImg2.webp';
import StockImg3 from '../../assets/StockImg3.jpg';
import StockImg4 from '../../assets/StockImg4.jpg';
import LeftArrow from '../../assets/LeftArrow.png';
import RightArrow from '../../assets/RightArrow.png';

// Pictures From Dylan

import ImgSet1 from '../../assets/ImgSet1.jpeg'
import ImgSet1p2 from '../../assets/ImgSet1-2.jpeg'
import ImgSet2 from '../../assets/ImgSet2.jpeg'
import ImgSet2p2 from '../../assets/ImgSet2-2.jpeg'
import ImgSet3 from '../../assets/ImgSet3.jpeg'
import ImgSet4 from '../../assets/ImgSet4.jpeg'
import ImgSet4p1 from '../../assets/ImgSet4-1.jpeg'
import ImgSet4p2 from '../../assets/ImgSet4-2.jpeg'
import ImgSet5 from '../../assets/ImgSet5.jpeg'
import ImgSet5p2 from '../../assets/ImgSet5-2.jpeg'
import ImgSet6 from '../../assets/ImgSet6-0.jpeg'
import ImgSet6p1 from '../../assets/ImgSet6.jpeg'
import ImgSet6p2 from '../../assets/ImgSet6-2.jpeg'
import ImgSet6p3 from '../../assets/ImgSet6-3.jpeg'
import ImgSet6p4 from '../../assets/ImgSet6-4.jpeg'
import ImgSet7 from '../../assets/ImgSet7-1.jpeg'
import ImgSet70 from '../../assets/ImgSet7.jpeg'
import ImgSet7p2 from '../../assets/ImgSet7-2.jpeg'
import ImgSet7p3 from '../../assets/ImgSet7-3.jpeg'
import ImgSet7p4 from '../../assets/ImgSet7-4.jpeg'
import ImgSet8 from '../../assets/ImgSet8.jpeg'
import ImgSet8p2 from '../../assets/ImgSet8-2.jpeg'
import ImgSet9 from '../../assets/ImgSet9.jpeg'
import ImgSet9p2 from '../../assets/ImgSet9-2.jpeg'
import ImgSet9p3 from '../../assets/ImgSet9-3.jpeg'
import ImgSet9p4 from '../../assets/ImgSet9-4.jpeg'
import ImgSet10 from '../../assets/ImgSet10.jpeg'
import ImgSet11 from '../../assets/ImgSet11.jpeg'
import ImgSet11p2 from '../../assets/ImgSet11-2.jpeg'
import ImgSet12 from '../../assets/ImgSet12.jpeg'
import ImgSet12p2 from '../../assets/ImgSet12-2.jpeg'
import ImgSet12p3 from '../../assets/ImgSet12-3.jpeg'
import ImgSet12p4 from '../../assets/ImgSet12-4.jpeg'
import ImgSet13 from '../../assets/ImgSet13.jpeg'
import ImgSet13p2 from '../../assets/ImgSet13-2.jpeg'
import ImgSet14 from '../../assets/ImgSet14.jpeg'
import ImgSet14p2 from '../../assets/ImgSet14-2.jpeg'
import ImgSet15 from '../../assets/ImgSet15.jpeg'
import ImgSet15p2 from '../../assets/ImgSet15-2.jpeg'
import ImgSet16 from '../../assets/ImgSet16.jpeg'
import ImgSet17 from '../../assets/ImgSet17.jpeg'












function Body() {
    const images = [ImgSet4,
        ImgSet4p1, ImgSet4p2, ImgSet1, ImgSet1p2, ImgSet2, ImgSet2p2, ImgSet3, ImgSet5, ImgSet5p2, ImgSet6, ImgSet6p1, ImgSet6p2, ImgSet6p3, ImgSet6p4, ImgSet7, ImgSet70, ImgSet7p2, ImgSet7p3,];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage((prevCurrentImage) => (prevCurrentImage + 1) % images.length);
        }, 4000); // Change the image every 4 seconds

        return () => clearTimeout(timer);
    }, [currentImage]);

    return (
        <div className='body'>
            <div className='body--container'>
                <p className='body--text'>Croucher Woodshop Creations</p>
                <p className='body--text--italic'>Beautiful, Original Handmade Creations</p>
            </div>
            <div className='body--image--container'>
                <img className='body--image' src={images[currentImage]} alt="" />
            </div>
            <section className='card'>
                <img className='arrows' src={LeftArrow} alt="" />
                <div className='card1'>
                    <img className='card--img' src={ImgSet9p4} alt="" />
                    <p>Kitchens</p>
                </div>
                <div className='card2'>
                    <img className='card--img' src={ImgSet15} alt="" />
                    <p>Bathroom Vanities</p>
                </div>
                <div className='card2'>
                    <img className='card--img' src={ImgSet6} alt="" />
                    <p>Built-ins</p>
                </div>
                <div className='card2'>
                    <img className='card--img' src={ImgSet4} alt="" />
                    <p>Furniture</p>
                </div>
                <div className='card2'>
                    <img className='card--img' src={ImgSet1p2} alt="" />
                    <p>Wall Coverings</p>
                </div>
                <div className='card2'>
                    <img className='card--img' src={ImgSet17} alt="" />
                    <p>Wood Turning</p>
                </div>
                <img className='arrows' src={RightArrow} alt="" />
            </section>
            <section className='history'>

            </section>
        </div>
    );
}

export default Body;
