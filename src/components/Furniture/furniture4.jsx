import ImgSet11 from '../../assets/ImgSet11.jpeg'
import ImgSet11p2 from '../../assets/ImgSet11-2.jpeg'


import { useState } from 'react';


function Furniture4() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet11}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet11)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet11p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet11p2)}
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

export default Furniture4;

