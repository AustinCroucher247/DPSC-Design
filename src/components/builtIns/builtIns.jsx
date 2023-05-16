import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BuiltIns() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://croucher-woodshop-final.herokuapp.com/api/built-ins?populate=*');
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
                    <Link to={`/builtIns/${project.id}`}>
                        <div className="dynamic-image">
                            <img className="dynamic-image" src={`https://croucher-woodshop-final.herokuapp.com${project.attributes.Thumbnail.data.attributes.url}`} alt={project.attributes.Title} />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BuiltIns;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// function BuiltIns() {
//     const [builtIns, setBuiltIns] = useState([]);

//     useEffect(() => {
//         const fetchBuiltIns = async () => {
//             try {
//                 // Update the URL with the correct endpoint for your data
//                 const response = await axios.get('http://localhost:1337/api/all-built-ins?populate=*');
//                 setBuiltIns(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching builtIns:', error);
//             }
//         };

//         fetchBuiltIns();
//     }, []);

//     return (
//         <div>
//             {builtIns.map((builtIn, index) => (
//                 builtIn.attributes.Image.data.map((imageData, imgIndex) => (
//                     <Link key={`${index}-${imgIndex}`} to={builtIn.attributes.Link}>
//                         <div className="card10 22">
//                             <div className="card_image">
//                                 <img src={`http://localhost:1337${imageData.attributes.url}`} alt="built-ins" />
//                             </div>
//                             <div className="card_title title-white">
//                                 <p className="card--overlay--text margin2"></p>
//                             </div>
//                         </div>
//                     </Link>
//                 ))
//             ))}
//         </div>
//     );
// }

// export default BuiltIns;


// import ImgSet6p4 from '../../assets/ImgSet6-4.jpeg'
// import ImgSet7 from '../../assets/ImgSet7-1.jpeg'
// import ImgSet12 from '../../assets/ImgSet12.jpeg'
// import ImgSet14 from '../../assets/ImgSet14.jpeg'
// import ImgSet5 from '../../assets/ImgSet5.jpeg'
// import ImgSet1 from '../../assets/ImgSet1.jpeg'

// import { Link } from 'react-router-dom';

// function BuiltIns() {
//     return (
//         <div>
//             <Link to="/builtIns1">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet6p4} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/builtIns2">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet7} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/builtIns3">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet12} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/builtIns4">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet14} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/builtIns5">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet5} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to="/builtIns6">
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet1} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'></p>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default BuiltIns;
