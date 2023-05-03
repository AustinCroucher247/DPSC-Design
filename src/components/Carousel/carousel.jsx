import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ images }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < images.length - 2) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <section className="card">
            <FaArrowLeft className="arrows" onClick={handleLeftClick} />
            {images.slice(startIndex, startIndex + 2).map((image, index) => (
                <div key={index} className={index === 0 ? "card1" : "card2"}>
                    <img className="card--img" src={image.src} alt={image.alt} />
                    <p>{image.title}</p>
                </div>
            ))}
            <FaArrowRight className="arrows" onClick={handleRightClick} />
        </section>
    );
};

export default Carousel;