
import { useState, useEffect } from 'react';
import axios from 'axios';
import './builtIns.scss'

function BuiltIns5() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [BuiltInImages, setBuiltInImages] = useState([]);

    useEffect(() => {
        const fetchBuiltInImages = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/built-in5s?populate=*');
                const imagesData = response.data.data[0].attributes.Image.data;
                console.log(response);
                const images = Object.values(imagesData).map((imageData) => imageData.attributes);
                console.log('Images:', images);
                setBuiltInImages(images.filter(image => image !== undefined));
            } catch (error) {
                console.error('Error fetching kitchen images:', error);
            }
        };

        fetchBuiltInImages();
    }, []);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="kitchen1--container">
                {BuiltInImages.map((imageObj, index) => {
                    return (
                        <img
                            key={index}
                            className="vanity--image1"
                            src={`http://localhost:1337${imageObj.url}`}
                            alt={`vanity${index + 1}`}
                            onClick={() => setSelectedImage(`http://localhost:1337${imageObj.url}`)}
                        />
                    );
                })}
            </div>

            {selectedImage && (
                <div className="vanity1--overlay" onClick={() => setSelectedImage(null)}>
                    <img className="vanity1--enlarged" src={selectedImage} alt="enlarged" />
                </div>
            )}
        </>
    );
}

export default BuiltIns5;





// import ImgSet5 from '../../assets/ImgSet5.jpeg'
// import ImgSet5p2 from '../../assets/ImgSet5-2.jpeg'

// import { useState } from 'react';


// function BuiltIns5() {
//     const [selectedImage, setSelectedImage] = useState(null);

//     return (
//         <>
//             <p className="vanity1--text">Gallery</p>
//             <div className="builtins--container">
//                 <img
//                     className="vanity--image1"
//                     src={ImgSet5}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet5)}
//                 />
//                 <img
//                     className="vanity--image1"
//                     src={ImgSet5p2}
//                     alt="vanity1"
//                     onClick={() => setSelectedImage(ImgSet5p2)}
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

// export default BuiltIns5;

