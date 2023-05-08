import axios from 'axios';
import { useState, useEffect } from 'react';


function Furniture3() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchFurnitureImages = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/Furniture3s?populate=*');
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

export default Furniture3;