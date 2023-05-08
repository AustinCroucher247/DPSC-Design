import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BathroomVanities() {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                // Make an API call to get the image from Strapi
                // Update the URL with the correct endpoint for your image
                const response = await axios.get('http://localhost:1337/api/all-bathrooms?populate=*');
                const imageUrl = response.data.data[0].attributes.Image.data.attributes.url;
                setImageSrc(`http://localhost:1337${imageUrl}`);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div>
            <Link to="/vanity1">
                <div className="card10 22">
                    <div className="card_image">
                        {imageSrc && <img src={imageSrc} alt="bathrooms" />}
                    </div>
                    <div className="card_title title-white">
                        <p className="card--overlay--text margin2"></p>
                    </div>
                </div>
            </Link>
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
