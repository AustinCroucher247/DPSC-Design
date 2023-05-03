
import ImgSet15 from '../../assets/ImgSet15.jpeg'
import './vanity1.scss'
import ImgSet15p2 from '../../assets/ImgSet15-2.jpeg'
import { useState } from 'react';

function Vanity1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="vanity1--container">
                <img
                    className="vanity--image1"
                    src={ImgSet15}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet15)}
                />

                <img
                    className="vanity--image1"
                    src={ImgSet15p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet15p2)}
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

export default Vanity1;
