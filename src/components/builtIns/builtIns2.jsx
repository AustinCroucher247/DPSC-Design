import ImgSet7 from '../../assets/ImgSet7-1.jpeg'
import ImgSet70 from '../../assets/ImgSet7.jpeg'
import ImgSet7p2 from '../../assets/ImgSet7-2.jpeg'
import ImgSet7p3 from '../../assets/ImgSet7-3.jpeg'
import ImgSet7p4 from '../../assets/ImgSet7-4.jpeg'
import { useState } from 'react';


function BuiltIns2() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet7}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet7)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet70}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet70)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet7p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet7p2)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet7p3}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet7p3)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet7p4}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet7p4)}
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

export default BuiltIns2;

