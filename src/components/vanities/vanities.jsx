import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BathroomVanities() {
    const [vanity, setVanity] = useState([]);

    useEffect(() => {
        const fetchVanity = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/all-bathrooms?populate=*');
                setVanity(response.data.data);
            } catch (error) {
                console.error('Error fetching builtIns:', error);
            }
        };

        fetchVanity();
    }, []);

    return (
        <div>
            {vanity.map((vanityItem, index) => {
                const imageData = vanityItem.attributes.Image.data.attributes;
                return (
                    <Link key={`${index}`} to={vanityItem.attributes.Link}>
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

export default BathroomVanities;






// import ImgSet15 from '../../assets/ImgSet15.jpeg'
// import { Link } from 'react-router-dom';

// function BathroomVanities() {
//     return (
//         <div>
//             <Link to="/vanity1">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet15} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default BathroomVanities;
