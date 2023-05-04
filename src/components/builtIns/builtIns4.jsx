import ImgSet14 from '../../assets/ImgSet14.jpeg'
import ImgSet14p2 from '../../assets/ImgSet14-2.jpeg'

import { useState } from 'react';


function BuiltIns4() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet14p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet14p2)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet14}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet14)}
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

export default BuiltIns4;

