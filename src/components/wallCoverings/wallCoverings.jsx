
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function WallCoverings() {
    const [covering, setCovering] = useState([]);

    useEffect(() => {
        const fetchcovering = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/all-wall-coverings?populate=*');
                setCovering(response.data.data);
            } catch (error) {
                console.error('Error fetching builtIns:', error);
            }
        };

        fetchcovering();
    }, []);
    return (
        <div>
            {covering.map((coveringItem, index) => {
                const imageData = coveringItem.attributes.Image.data[0].attributes;
                return (
                    <Link key={`${index}`} to={coveringItem.attributes.Link}>
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

export default WallCoverings;
