
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Miscellaneous() {
    const [misc, setMisc] = useState([]);

    useEffect(() => {
        const fetchMisc = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/all-miscellaneous?populate=*');
                setMisc(response.data.data);
            } catch (error) {
                console.error('Error fetching builtIns:', error);
            }
        };

        fetchMisc();
    }, []);
    return (
        <div>
            {misc.map((miscItem, index) => {
                const imageData = miscItem.attributes.Image.data[0].attributes;
                return (
                    <Link key={`${index}`} to={miscItem.attributes.Link}>
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

export default Miscellaneous;
