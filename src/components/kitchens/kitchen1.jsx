
import ImgSet9 from '../../assets/ImgSet9.jpeg'
import ImgSet9p2 from '../../assets/ImgSet9-2.jpeg'
import ImgSet9p3 from '../../assets/ImgSet9-3.jpeg'
import ImgSet9p4 from '../../assets/ImgSet9-4.jpeg'
import { useState } from 'react';
import './kitchen.scss'

function Kitchen1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="kitchen1--container">
                <img
                    className="vanity--image1"
                    src={ImgSet9}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet9)}
                />

                <img
                    className="vanity--image1"
                    src={ImgSet9p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet9p2)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet9p3}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet9p3)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet9p4}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet9p4)}
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

export default Kitchen1;
