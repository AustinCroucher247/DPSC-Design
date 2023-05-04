
import ImgSet8 from '../../assets/ImgSet8.jpeg'
import { Link } from 'react-router-dom';

function WallCoverings() {
    return (
        <div>
            <Link to="/wallCoverings1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet8} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default WallCoverings;
