import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Kitchen() {
    const [kitchenImage, setKitchenImage] = useState(null);

    useEffect(() => {
        const fetchKitchenImage = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/all-kitchens?populate=*');
                console.log(response)
                setKitchenImage(response.data.data[0].attributes.Image.data.attributes.url);
            } catch (error) {
                console.error('Error fetching kitchen image:', error);
            }
        };

        fetchKitchenImage();
    }, []);

    return (
        <div>
            {kitchenImage && (
                <Link to="/kitchen1">
                    <div class="card10 22">
                        <div class="card_image">
                            <img src={`http://localhost:1337${kitchenImage}`} alt='bathrooms' />
                        </div>
                        <div class="card_title title-white">
                            <p className='card--overlay--text margin2'></p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default Kitchen;