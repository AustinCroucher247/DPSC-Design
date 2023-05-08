import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './kitchen.scss';

function Kitchen1() {
    const [kitchenImages, setKitchenImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchKitchenImages = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/kitchen1s?populate=*');
                const imagesData = response.data.data[0].attributes.Image.data;
                console.log(response);
                const images = Object.values(imagesData).map((imageData) => imageData.attributes);
                console.log('Images:', images);
                setKitchenImages(images.filter(image => image !== undefined));
            } catch (error) {
                console.error('Error fetching kitchen images:', error);
            }
        };

        fetchKitchenImages();
    }, []);

    return (
        <>
            <p className="vanity1--text">Gallery</p>
            <div className="kitchen1--container">
                {kitchenImages.map((imageObj, index) => {
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

export default Kitchen1;