import axios from 'axios';
import { useState, useEffect } from 'react';


function Furniture1() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchFurnitureImages = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/Furniture1s?populate=*');
                const imagesData = response.data.data[0].attributes.Image.data;
                console.log(response);
                const images = Object.values(imagesData).map((imageData) => imageData.attributes);
                console.log('Images:', images);
                setImages(images.filter(image => image !== undefined));
            } catch (error) {
                console.error('Error fetching kitchen images:', error);
            }
        };

        fetchFurnitureImages();
    }, []);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="builtins--container">
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

export default Furniture1;

// import ImgSet4 from '../../assets/ImgSet4.jpeg'
// import ImgSet4p1 from '../../assets/ImgSet4-1.jpeg'
// import ImgSet4p2 from '../../assets/ImgSet4-2.jpeg'

// import { useState } from 'react';


// function Furniture1() {

//     const [selectedImage, setSelectedImage] = useState(null);

//     return (
//         <>
//             <p className="vanity1--text">Gallery</p>
//             <div className="builtins--container">
//                 <img
//                     className="vanity--image1"
//                     src={ImgSet4}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet4)}
//                 />
//                 <img
//                     className="vanity--image1"
//                     src={ImgSet4p1}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet4p1)}
//                 />
//                 <img
//                     className="vanity--image1"
//                     src={ImgSet4p2}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet4p2)}
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

// export default Furniture1;

