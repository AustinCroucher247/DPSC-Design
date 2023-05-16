import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Miscellaneous() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://croucher-woodshop-final.herokuapp.com/api/miscellaneous?populate=*');
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
                    <Link to={`/Miscellaneous/${project.id}`}>
                        <div className="dynamic-image">
                            <img className="dynamic-image" src={`https://croucher-woodshop-final.herokuapp.com${project.attributes.Thumbnail.data.attributes.url}`} alt={project.attributes.Title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Miscellaneous;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Miscellaneous() {
//     const [misc, setMisc] = useState([]);

//     useEffect(() => {
//         const fetchMisc = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1337/api/all-miscellaneous?populate=*');
//                 setMisc(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching builtIns:', error);
//             }
//         };

//         fetchMisc();
//     }, []);
//     return (
//         <div>
//             {misc.map((miscItem, index) => {
//                 const imageData = miscItem.attributes.Image.data[0].attributes;
//                 return (
//                     <Link key={`${index}`} to={miscItem.attributes.Link}>
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

// export default Miscellaneous;
