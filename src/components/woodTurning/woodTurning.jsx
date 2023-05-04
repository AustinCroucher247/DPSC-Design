
import ImgSet17 from '../../assets/ImgSet17.jpeg'
import { Link } from 'react-router-dom';

function WoodTurning() {
    return (
        <div>
            <Link to="/woodTurning1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet17} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default WoodTurning;
