
import ImgSet6p4 from '../../assets/ImgSet6-4.jpeg'
import ImgSet7 from '../../assets/ImgSet7-1.jpeg'
import ImgSet12 from '../../assets/ImgSet12.jpeg'
import ImgSet14 from '../../assets/ImgSet14.jpeg'
import ImgSet5 from '../../assets/ImgSet5.jpeg'
import ImgSet1 from '../../assets/ImgSet1.jpeg'

import { Link } from 'react-router-dom';

function BuiltIns() {
    return (
        <div>
            <Link to="/builtIns1">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet6p4} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/builtIns2">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet7} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/builtIns3">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet12} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/builtIns4">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet14} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/builtIns5">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet5} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
            <Link to="/builtIns6">
                <div class="card10 22">
                    <div class="card_image">
                        <img src={ImgSet1} alt='bathrooms' />
                    </div>
                    <div class="card_title title-white">
                        <p className='card--overlay--text margin2'></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default BuiltIns;
