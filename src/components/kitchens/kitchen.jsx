
import ImgSet9 from '../../assets/ImgSet9.jpeg'
import { Link } from 'react-router-dom';

function Kitchen() {
    return (
        <div>
            <Link to="/kitchen1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet9} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Kitchen;
