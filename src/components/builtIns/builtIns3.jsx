import ImgSet12 from '../../assets/ImgSet12.jpeg'
import ImgSet12p2 from '../../assets/ImgSet12-2.jpeg'
import ImgSet12p3 from '../../assets/ImgSet12-3.jpeg'
import ImgSet12p4 from '../../assets/ImgSet12-4.jpeg'
import { useState } from 'react';


function BuiltIns1() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
                <img
                    className="vanity--image1"
                    src={ImgSet12}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet12)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet12p2}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet12p2)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet12p3}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet12p3)}
                />
                <img
                    className="vanity--image1"
                    src={ImgSet12p4}
                    alt="vanity1"
                    onClick={() => setSelectedImage(ImgSet12p4)}
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

