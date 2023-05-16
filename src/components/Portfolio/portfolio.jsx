import './portfolio.scss'
import { Link } from 'react-router-dom'


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        const fetchPortfolioItems = async () => {
            try {
                const response = await axios.get('https://croucher-woodshop-final.herokuapp.com/api/carousel-images?populate=*');
                const data = response.data.data;
                console.log("Portfolio items API response:", data);
                const formattedItems = data.map((item) => ({
                    ...item.attributes,
                    src: `https://croucher-woodshop-final.herokuapp.com${item.attributes.Image.data.attributes.url}`,
                    to: item.attributes.Link,
                }));
                setPortfolioItems(formattedItems);
            } catch (error) {
                console.error('Error fetching portfolio items:', error);
            }
        };

        fetchPortfolioItems();
    }, []);

    return (
        <div className="cards-list">
            {Array.isArray(portfolioItems) && portfolioItems.map((item, index) => (
                <Link to={item.to} key={index}>
                    <div className={`card10 ${item.classSuffix}`}>
                        <div className="card_image">
                            <img src={item.src} alt={item.Title} />
                        </div>
                        <div className={`card_title ${item.titleClass}`}>
                            <p className={`card--overlay--text card1 ${item.marginClass}`}>{item.Title}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Portfolio;























// function Portfolio() {
//     return (
//         <div class="cards-list">
//             <Link to={'/kitchens'}>
//                 <div class="card10 11">
//                     <div class="card_image"> <img src={ImgSet9p4} alt='kitchens' /> </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin'>Kitchens</p>
//                     </div>
//                 </div>
//             </Link>

//             <Link to={'/BathroomVanities'}>
//                 <div class="card10 22">
//                     <div class="card_image">
//                         <img src={ImgSet15} alt='bathrooms' />
//                     </div>
//                     <div class="card_title title-white">
//                         <p className='card--overlay--text margin2'>Bathroom Vanities</p>
//                     </div>
//                 </div>
//             </Link>

//             <Link to={'/BuiltIns'}>
//                 <div class="card10 33">
//                     <div class="card_image">
//                         <img src={ImgSet6p1} alt='built ins' />
//                     </div>
//                     <div class="card_title">
//                         <p className='card--overlay--text margin'>Built-ins</p>
//                     </div>
//                 </div>
//             </Link>

//             <Link to={'/Furniture'}>
//                 <div class="card10 44">
//                     <div class="card_image">
//                         <img src={ImgSet4} alt='furniture' />
//                     </div>
//                     <div class="card_title title-black">
//                         <p className='card--overlay--text margin' >Furniture</p>
//                     </div>
//                 </div>
//             </Link>

//             <Link to={'/WallCoverings'}>
//                 <div class="card10 55">
//                     <div class="card_image">
//                         <img src={ImgSet8} alt='Wall Coverings' />
//                     </div>
//                     <div class="card_title title-black">
//                         <p className='card--overlay--text margin1'>Wall Coverings</p>
//                     </div>
//                 </div>
//             </Link>

//             <Link to={'/WoodTurning'}>
//                 <div class="card10 55">
//                     <div class="card_image">
//                         <img src={ImgSet17} alt='Wood Turning' />
//                     </div>
//                     <div class="card_title title-black">
//                         <p className='card--overlay--text margin1'>Wood Turning</p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to={'/EntertainmentConsoles'}>
//                 <div class="card10 55">
//                     <div class="card_image">
//                         <img src={ImgSet2} alt='Wood Turning' />
//                     </div>
//                     <div class="card_title title-black">
//                         <p className='card--overlay--text margin10'>Entertainment Consoles</p>
//                     </div>
//                 </div>
//             </Link>
//             <Link to={'/Miscellaneous'}>
//                 <div class="card10 55">
//                     <div class="card_image">
//                         <img src={ImgSet3} alt='Wood Turning' />
//                     </div>
//                     <div class="card_title title-black">
//                         <p className='card--overlay--text margin100'>Miscellaneous</p>
//                     </div>
//                 </div>
//             </Link>


//         </div>
//     );
// }

// export default Portfolio;
