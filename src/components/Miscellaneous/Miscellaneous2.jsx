import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Miscellaneous1() {
    const [images, setImages] = useState([]);

    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        const fetchMiscImages = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/miscellaneous2s?populate=*');
                const imagesData = response.data.data[0].attributes.Image.data;
                console.log(response);
                const images = Object.values(imagesData).map((imageData) => imageData.attributes);
                console.log('Images:', images);
                setImages(images.filter(image => image !== undefined));
            } catch (error) {
                console.error('Error fetching kitchen images:', error);
            }
        };

        fetchMiscImages();
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

export default Miscellaneous1;
