
import ImgSet3 from '../../assets/ImgSet3.jpeg'
import ImgSet13 from '../../assets/ImgSet13.jpeg'

import { Link } from 'react-router-dom';

function Miscellaneous() {
    return (
        <div>
            <Link to="/Miscellaneous1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet3} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/Miscellaneous2">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet13} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Miscellaneous;
