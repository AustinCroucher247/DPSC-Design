import ImgSet4 from '../../assets/ImgSet4.jpeg'
import ImgSet4p1 from '../../assets/ImgSet4-1.jpeg'
import ImgSet4p2 from '../../assets/ImgSet4-2.jpeg'

import { useState } from 'react';


function Furniture1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet4}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet4)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet4p1}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet4p1)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet4p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet4p2)}
                />
            </div>

            {selectedImage && (
                <div className="vanity1--overlay" onClick={() => setSelectedImage(null)}>
                    <img className="vanity1--enlarged" src={selectedImage} alt="enlarged" />
                </div>
            )}
        </>
    );
}

export default Furniture1;

