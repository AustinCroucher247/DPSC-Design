import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Kitchen() {
    const [kitchen, setKitchen] = useState([]);

    useEffect(() => {
        const fetchKitcen = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/all-kitchens?populate=*');
                setKitchen(response.data.data);
            } catch (error) {
                console.error('Error fetching builtIns:', error);
            }
        };

        fetchKitcen();
    }, []);

    return (
        <div>
            {kitchen.map((kitchenItem, index) => {
                const imageData = kitchenItem.attributes.Image.data.attributes;
                return (
                    <Link key={`${index}`} to={kitchenItem.attributes.Link}>
                        <div className="card10 22">
                            <div className="card_image">
                                <img src={`http://localhost:1337${imageData.url}`} alt="built-ins" />
                            </div>
                            <div className="card_title title-white">
                                <p className="card--overlay--text margin2"></p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Kitchen;