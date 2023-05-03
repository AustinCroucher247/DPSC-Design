
import ImgSet15 from '../../assets/ImgSet15.jpeg'
import { Link } from 'react-router-dom';

function BathroomVanities() {
    return (
        <div>
            <Link to="/vanity1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet15} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default BathroomVanities;
