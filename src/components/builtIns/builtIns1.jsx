
import { useState } from 'react';

import ImgSet6 from '../../assets/ImgSet6-0.jpeg'
import ImgSet6p1 from '../../assets/ImgSet6.jpeg'
import ImgSet6p2 from '../../assets/ImgSet6-2.jpeg'
import ImgSet6p3 from '../../assets/ImgSet6-3.jpeg'
import ImgSet6p4 from '../../assets/ImgSet6-4.jpeg'
import './builtIns.scss'

function BuiltIns1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet6}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet6)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet6p1}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet6p1)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet6p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet6p2)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet6p3}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet6p3)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet6p4}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet6p4)}
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

export default BuiltIns1;

