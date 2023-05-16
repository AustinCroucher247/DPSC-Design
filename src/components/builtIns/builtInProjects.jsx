import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function BuiltInProjects() {
    const [project, setProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://croucher-woodshop-final.herokuapp.com/api/built-ins?populate=*&id=${id}`);
                setProject(response.data.data.find(p => p.id === parseInt(id)));
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [id]);
    // eslint-disable-next-line
    const openImageModal = (image) => {
        setSelectedImage(image);
    };
    // eslint-disable-next-line
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
                        const imageUrl = `http://croucher-woodshop-final.herokuapp.com${image.attributes.url}`;
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

export default BuiltInProjects;