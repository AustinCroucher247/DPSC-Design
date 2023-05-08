import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BathroomVanities() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/vanities?populate=*');
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
                    <Link to={`/BathroomVanities/${project.id}`}>
                        <div className="dynamic-image">
                            <img className="dynamic-image" src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`} alt={project.attributes.Title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BathroomVanities;





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function BathroomVanities() {
//     const [vanity, setVanity] = useState([]);

//     useEffect(() => {
//         const fetchVanity = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1337/api/all-bathrooms?populate=*');
//                 setVanity(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching builtIns:', error);
//             }
//         };

//         fetchVanity();
//     }, []);

//     return (
//         <div>
//             {vanity.map((vanityItem, index) => {
//                 const imageData = vanityItem.attributes.Image.data.attributes;
//                 return (
//                     <Link key={`${index}`} to={vanityItem.attributes.Link}>
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

// export default BathroomVanities;






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
