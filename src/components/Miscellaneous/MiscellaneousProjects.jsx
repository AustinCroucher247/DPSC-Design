import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MiscellaneousProjects() {
    const [project, setProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/miscellaneous?populate=*&id=${id}`);
                setProject(response.data.data.find(p => p.id === parseInt(id)));
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [id]);

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>{project.attributes.Title}</h1>
            <div className="builtins--container">
                {project.attributes.Images.data &&
                    project.attributes.Images.data.map((image, index) => {
                        const imageUrl = `http://localhost:1337${image.attributes.url}`;
                        return (
                            <img
                                key={index}
                                className="vanity--image1"
                                src={imageUrl}
                                alt={image.attributes.alternativeText}
                                onClick={() => setSelectedImage(imageUrl)}
                            />
                        );
                    })}
            </div>

            {selectedImage && (
                <div className="vanity1--overlay" onClick={() => setSelectedImage(null)}>
                    <img className="vanity1--enlarged" src={selectedImage} alt="enlarged" />
                </div>
            )}
        </>
    );
}

export default MiscellaneousProjects;