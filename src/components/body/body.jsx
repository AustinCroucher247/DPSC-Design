import React, { useState, useEffect } from 'react';
import './body.scss';
import Carousel from "../Carousel/carousel";
import Footer from '../footer/footer';
import axios from 'axios';


function Body() {
    const [images, setImages] = useState([]);
    // eslint-disable-next-line
    const [carouselImages, setCarouselImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const bodyImagesResponse = await axios.get('https://croucher-woodshop-final.herokuapp.com/api/body-images?populate=*');
                const bodyImagesData = bodyImagesResponse.data.data;
                console.log("Body Images API response:", bodyImagesData);

                const imageUrls = bodyImagesData.map(imgData => imgData.attributes.image.data.attributes.url);
                setImages(imageUrls);

            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
        // eslint-disable-next-line
    }, []);

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (!images.length) return;

        const timer = setTimeout(() => {
            setCurrentImage((prevCurrentImage) => (prevCurrentImage + 1) % images.length);
        }, 4000); // Change the image every 4 seconds

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [currentImage, images]);

    return (
        <>
            <div className='body'>
                <div>
                    <div className='body--container'>
                        <p className='body--text'>Croucher Woodshop Creations</p>
                        <p className='body--text--italic'>Beautiful, Original Handmade Creations</p>
                    </div>
                    <div className='body--image--container'>
                        {images.length > 0 && (
                            <img className='body--image' src={`http://croucher-woodshop-final.herokuapp.com${images[currentImage]}`} alt="" />
                        )}
                    </div>
                </div>
                <section className='card'>
                    <Carousel images={carouselImages} />
                </section>
                <section className='history'>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Body;











// function Body() {
//     const images = [ImgSet4,
//         ImgSet4p1, ImgSet4p2, ImgSet1, ImgSet1p2, ImgSet2, ImgSet2p2, ImgSet3, ImgSet5, ImgSet5p2, ImgSet6, ImgSet6p1, ImgSet6p2, ImgSet6p3, ImgSet6p4, ImgSet7, ImgSet70, ImgSet7p2, ImgSet7p3,];
//     const [currentImage, setCurrentImage] = useState(0);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setCurrentImage((prevCurrentImage) => (prevCurrentImage + 1) % images.length);
//         }, 4000); // Change the image every 4 seconds

//         return () => clearTimeout(timer);
//         // eslint-disable-next-line
//     }, [currentImage]);


//     const imagesCarousel = [
//         { src: ImgSet9p4, alt: "", title: "Kitchens", to: "/kitchens" },
//         { src: ImgSet15, alt: "", title: "Bathroom Vanities", to: "/BathroomVanities" },
//         { src: ImgSet6p1, alt: "", title: "Built-ins", to: "BuiltIns" },
//         { src: ImgSet4, alt: "", title: "Furniture", to: "Furniture" },
//         { src: ImgSet8, alt: "", title: "Wall Coverings", to: "WallCoverings" },
//         { src: ImgSet17, alt: "", title: "Wood Turning", to: "WoodTurning" },
//     ];


//     return (
//         <div className='body'>
//             <div className='body--container'>
//                 <p className='body--text'>Croucher Woodshop Creations</p>
//                 <p className='body--text--italic'>Beautiful, Original Handmade Creations</p>
//             </div>
//             <div className='body--image--container'>
//                 <img className='body--image' src={images[currentImage]} alt="" />
//             </div>
//             <section className='card'>
//                 <Carousel images={imagesCarousel} />
//             </section>
//             <section className='history'>
//             </section>
//             <Footer />
//         </div>
//     );
// }

// export default Body;


