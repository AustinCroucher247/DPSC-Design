
import ImgSet8 from '../../assets/ImgSet8.jpeg'
import ImgSet8p2 from '../../assets/ImgSet8-2.jpeg'

import { useState } from 'react';


function WallCoverings1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet8}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet8)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet8p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet8p2)}
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

export default WallCoverings1;
