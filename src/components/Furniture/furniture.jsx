import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BathroomVanities() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://croucher-woodshop-final.herokuapp.com/api/furnitures?populate=*');
                // Access the data array from the response object.
                const projectsData = response.data.data;
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <div className='dynamic--container' key={project.id}>
                    <h3>{project.attributes.Title}</h3>
                    <Link to={`/Furniture/${project.id}`}>
                        <div className="dynamic-image">
                            <img className="dynamic-image" src={`https://croucher-woodshop-final.herokuapp.com${project.attributes.Thumbnail.data.attributes.url}`} alt={project.attributes.Title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BathroomVanities;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Furniture() {
//     const [furniture, setFurniture] = useState([]);

//     useEffect(() => {
//         const fetchFurniture = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1337/api/all-furnitures?populate=*');
//                 setFurniture(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching builtIns:', error);
//             }
//         };

//         fetchFurniture();
//     }, []);

//     return (
//         <div>
//             {furniture.map((furnitureItem, index) => {
//                 const imageData = furnitureItem.attributes.Image.data.attributes;
//                 return (
//                     <Link key={`${index}`} to={furnitureItem.attributes.Link}>
//                         <div className="card10 22">
//                             <div className="card_image">
//                                 <img src={`http://localhost:1337${imageData.url}`} alt="built-ins" />
//                             </div>
//                             <div className="card_title title-white">
//                                 <p className="card--overlay--text margin2"></p>
//                             </div>
//                         </div>
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// }

// export default Furniture;



// import ImgSet4 from '../../assets/ImgSet4.jpeg'
// import ImgSet10 from '../../assets/ImgSet10.jpeg'
// import ImgSet16 from '../../assets/ImgSet16.jpeg'
// import ImgSet11 from '../../assets/ImgSet11.jpeg'



// import { Link } from 'react-router-dom';

// function Furniture() {
//     return (
//         <div>
//             <Link to="/furniture1">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet4} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/furniture2">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet10} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/furniture3">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet16} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/furniture4">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet11} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default Furniture;
