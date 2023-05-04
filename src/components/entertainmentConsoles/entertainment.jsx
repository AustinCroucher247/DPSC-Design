
import ImgSet2 from '../../assets/ImgSet2.jpeg'
import { Link } from 'react-router-dom';

function Entertainment() {
    return (
        <div>
            <Link to="/EntertainmentConsoles1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet2} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Entertainment;
