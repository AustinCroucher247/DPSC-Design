// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Carousel = () => {
//     const [images, setImages] = useState([]);
//     const [startIndex, setStartIndex] = useState(0);

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await fetch("http://localhost:1337/api/carousel-images?populate=*");
//                 const data = await response.json();
//                 console.log("Carousel Images API response:", data)
//                 const carouselImages = data.data.map((item) => ({
//                     ...item.attributes,
//                     src: `http://localhost:1337${item.attributes.CarouselImage.data.attributes.url}`,
//                     to: item.attributes.link,
//                 }));
//                 setImages(carouselImages);
//             } catch (error) {
//                 console.error("Error fetching carousel images:", error);
//             }
//         };

//         fetchImages();
//     }, []);

//     const handleLeftClick = () => {
//         if (startIndex > 0) {
//             setStartIndex(startIndex - 1);
//         } else {
//             setStartIndex(images.length - 2);
//         }
//     };

//     const handleRightClick = () => {
//         if (startIndex < images.length - 2) {
//             setStartIndex(startIndex + 2);
//         } else {
//             setStartIndex(0);
//         }
//     };

//     return (
//         <section className="card">
//             <FaArrowLeft className="arrows" onClick={handleLeftClick} />
//             {images.slice(startIndex, startIndex + 2).map((image, index) => (
//                 <Link key={index} to={image.to}>
//                     <div className={index === 0 ? "card1" : "card2"}>
//                         <img className="card--img" src={image.src} alt={image.alt} />
//                         <p>{image.title}</p>
//                     </div>
//                 </Link>
//             ))}
//             <FaArrowRight className="arrows" onClick={handleRightClick} />
//         </section>
//     );
// };

// export default Carousel;





//Below is code for carousel going to 4 displayed images after 1280px

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("http://localhost:1337/api/carousel-images?populate=*");
                const data = await response.json();
                console.log("Carousel Images API response:", data)
                const carouselImages = data.data.map((item) => ({
                    ...item.attributes,
                    src: `http://localhost:1337${item.attributes.CarouselImage.data.attributes.url}`,
                    to: item.attributes.link,
                }));
                setImages(carouselImages);
            } catch (error) {
                console.error("Error fetching carousel images:", error);
            }
        };

        fetchImages();
    }, []);

    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        } else {
            setStartIndex(images.length - 4);
        }
    };

    const handleRightClick = () => {
        if (startIndex < images.length - 4) {
            setStartIndex(startIndex + 4);
        } else {
            setStartIndex(0);
        }
    };

    return (
        <section className="card">
            <FaArrowLeft className="arrows" onClick={handleLeftClick} />
            {images.slice(startIndex, startIndex + (window.innerWidth >= 1280 ? 4 : 2)).map((image, index) => (
                <Link key={index} to={image.to}>
                    <div className={index % 2 === 0 ? "card1" : "card2"}>
                        <img className="card--img" src={image.src} alt={image.alt} />
                        <p>{image.title}</p>
                    </div>
                </Link>
            ))}
            <FaArrowRight className="arrows" onClick={handleRightClick} />
        </section>
    );
};

export default Carousel;


