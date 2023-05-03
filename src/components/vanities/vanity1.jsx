
import ImgSet15 from '../../assets/ImgSet15.jpeg'
import './vanity1.scss'
import ImgSet15p2 from '../../assets/ImgSet15-2.jpeg'

function Vanity1() {
    return (
        <>
            <p className='vanity1--text'>Gallery</p>
            <div className='vanity1--container'>
                <img className='vanity--image1' src={ImgSet15} alt="vanity1" />
                <img className='vanity--image1' src={ImgSet15p2} alt="vanity1" />


            </div>
        </>
    );
}

export default Vanity1;
