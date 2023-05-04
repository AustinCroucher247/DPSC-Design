import ImgSet1 from '../../assets/ImgSet1.jpeg'
import ImgSet1p2 from '../../assets/ImgSet1-2.jpeg'

import { useState } from 'react';


function BuiltIns6() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet1}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet1)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet1p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet1p2)}
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

export default BuiltIns6;

