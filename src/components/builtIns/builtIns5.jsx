import ImgSet5 from '../../assets/ImgSet5.jpeg'
import ImgSet5p2 from '../../assets/ImgSet5-2.jpeg'

import { useState } from 'react';


function BuiltIns5() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet5}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet5)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet5p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet5p2)}
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

export default BuiltIns5;

