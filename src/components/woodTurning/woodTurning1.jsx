
import ImgSet17 from '../../assets/ImgSet17.jpeg'


import { useState } from 'react';


function WallCoverings1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet17}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet17)}
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
