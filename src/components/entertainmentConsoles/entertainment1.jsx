
import ImgSet2 from '../../assets/ImgSet2.jpeg'
import ImgSet2p1 from '../../assets/ImgSet2-2.jpeg'


import { useState } from 'react';


function Entertainment1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet2)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet2p1}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet2p1)}
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

export default Entertainment1;
