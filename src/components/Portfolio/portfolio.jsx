import './portfolio.scss'
import ImgSet17 from '../../assets/ImgSet17.jpeg'
import ImgSet15 from '../../assets/ImgSet15.jpeg'
import ImgSet9p4 from '../../assets/ImgSet9-4.jpeg'
import ImgSet6p1 from '../../assets/ImgSet6.jpeg'
import ImgSet1p2 from '../../assets/ImgSet1-2.jpeg'
import ImgSet4 from '../../assets/ImgSet4.jpeg'
import { Link } from 'react-router-dom'


function Portfolio() {
    return (
        <div class="cards-list">
            <Link to={'/kitchens'}>
                <div class="card10 11">
                    <div class="card_image"> <img src={ImgSet9p4} alt='kitchens' /> </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin'>Kitchens</p>
                    </div>
                </div>
            </Link>

            <Link to={'/BathroomVanities'}>
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet15} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'>Bathroom Vanities</p>
                    </div>
                </div>
            </Link>

            <Link to={'/BuiltIns'}>
                <div class="card10 33">
                    <div class="card_image">
                        <img src={ImgSet6p1} alt='built ins' />
                    </div>
                    <div class="card_title">
                        <p className='card--overlay--text margin'>Built-ins</p>
                    </div>
                </div>
            </Link>

            <Link to={'/Furniture'}>
                <div class="card10 44">
                    <div class="card_image">
                        <img src={ImgSet4} alt='furniture' />
                    </div>
                    <div class="card_title title-black">
                        <p className='card--overlay--text margin' >Furniture</p>
                    </div>
                </div>
            </Link>

            <Link to={'/WallCoverings'}>
                <div class="card10 55">
                    <div class="card_image">
                        <img src={ImgSet1p2} alt='Wall Coverings' />
                    </div>
                    <div class="card_title title-black">
                        <p className='card--overlay--text margin1'>Wall Coverings</p>
                    </div>
                </div>
            </Link>

            <Link to={'/WoodTurning'}>
                <div class="card10 55">
                    <div class="card_image">
                        <img src={ImgSet17} alt='Wood Turning' />
                    </div>
                    <div class="card_title title-black">
                        <p className='card--overlay--text margin1'>Wood Turning</p>
                    </div>
                </div>
            </Link>


        </div>
    );
}

export default Portfolio;
