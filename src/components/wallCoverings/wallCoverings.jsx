import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function WallCoverings() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/wall-coverings?populate=*');
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
                    <Link to={`/wallcoverings/${project.id}`}>
                        <div className="dynamic-image">
                            <img className="dynamic-image" src={`http://localhost:1337${project.attributes.Thumbnail.data.attributes.url}`} alt={project.attributes.Title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default WallCoverings;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function WallCoverings() {
//     const [covering, setCovering] = useState([]);

//     useEffect(() => {
//         const fetchcovering = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1337/api/all-wall-coverings?populate=*');
//                 setCovering(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching builtIns:', error);
//             }
//         };

//         fetchcovering();
//     }, []);
//     return (
//         <div>
//             {covering.map((coveringItem, index) => {
//                 const imageData = coveringItem.attributes.Image.data[0].attributes;
//                 return (
//                     <Link key={coveringItem.id} to={`/wallCoverings/${coveringItem.id}`}>
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

// export default WallCoverings;
