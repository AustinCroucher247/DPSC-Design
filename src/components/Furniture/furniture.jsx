
import ImgSet4 from '../../assets/ImgSet4.jpeg'
import ImgSet10 from '../../assets/ImgSet10.jpeg'
import ImgSet16 from '../../assets/ImgSet16.jpeg'
import ImgSet11 from '../../assets/ImgSet11.jpeg'



import { Link } from 'react-router-dom';

function Furniture() {
    return (
        <div>
            <Link to="/furniture1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet4} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/furniture2">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet10} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/furniture3">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet16} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/furniture4">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet11} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Furniture;
