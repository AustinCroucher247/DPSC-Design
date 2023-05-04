
import ImgSet13 from '../../assets/ImgSet13.jpeg'
import ImgSet13p2 from '../../assets/ImgSet13-2.jpeg'


import { useState } from 'react';


function Miscellaneous2() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet13}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet13)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet13p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet13p2)}
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

export default Miscellaneous2;
