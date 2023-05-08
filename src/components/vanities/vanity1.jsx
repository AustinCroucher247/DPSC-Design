import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './vanity1.scss';

function Vanity1() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchVanityImages = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/vanity1s?populate=*');
                const imagesData = response.data.data[0].attributes.Image.data;
                console.log(response);
                const images = Object.values(imagesData).map((imageData) => imageData.attributes);
                console.log('Images:', images);
                setImages(images.filter(image => image !== undefined));
            } catch (error) {
                console.error('Error fetching kitchen images:', error);
            }
        };

        fetchVanityImages();
    }, []);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="vanity1--container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className="vanity--image1"
                        src={`http://localhost:1337${image.url}`}
                        alt="vanity1"
                        onClick={() => setSelectedImage(`http://localhost:1337${image.url}`)}
                    />
                ))}
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














// import ImgSet15 from '../../assets/ImgSet15.jpeg'
// import './vanity1.scss'
// import ImgSet15p2 from '../../assets/ImgSet15-2.jpeg'
// import { useState } from 'react';

// function Vanity1() {

//     const [selectedImage, setSelectedImage] = useState(null);

//     return (
//         <>
//             <p className="vanity1--text">Gallery</p>
//             <div className="vanity1--container">
//                 <img
//                     className="vanity--image1"
//                     src={ImgSet15}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet15)}
//                 />

//                 <img
//                     className="vanity--image1"
//                     src={ImgSet15p2}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet15p2)}
//                 />
//             </div>

//             {selectedImage && (
//                 <div className="vanity1--overlay" onClick={() => setSelectedImage(null)}>
//                     <img className="vanity1--enlarged" src={selectedImage} alt="enlarged" />
//                 </div>
//             )}
//         </>
//     );
// }

// export default Vanity1;
