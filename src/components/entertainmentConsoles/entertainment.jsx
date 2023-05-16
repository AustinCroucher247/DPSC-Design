import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Entertainment() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://croucher-woodshop-final.herokuapp.com/api/entertainments?populate=*');
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
                    <Link to={`/EntertainmentConsoles/${project.id}`}>
                        <div className="dynamic-image">
                            <img className="dynamic-image" src={`https://croucher-woodshop-final.herokuapp.com${project.attributes.Thumbnail.data.attributes.url}`} alt={project.attributes.Title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Entertainment;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Entertainment() {
//     const [entertainment, setentertainment] = useState([]);

//     useEffect(() => {
//         const fetchEntertainment = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1337/api/all-entertainment-consoles?populate=*');
//                 setentertainment(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching builtIns:', error);
//             }
//         };

//         fetchEntertainment();
//     }, []);
//     return (
//         <div>
//             {entertainment.map((entertainmentItem, index) => {
//                 const imageData = entertainmentItem.attributes.Image.data[0].attributes;
//                 return (
//                     <Link key={`${index}`} to={entertainmentItem.attributes.Link}>
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

// export default Entertainment;
