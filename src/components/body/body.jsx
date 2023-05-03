import './body.scss'
import StockImg from '../../assets/stockImg.webp'
import StockImg2 from '../../assets/StockImg2.webp'
import StockImg3 from '../../assets/StockImg3.jpg'
import StockImg4 from '../../assets/StockImg4.jpg'
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'


function Body() {
    return (
        <div className='body'>
            <div className='body--container'>
                <p className='body--text'> Croucher Woodshop Creations</p>
                <p className='body--text--italic'>Beautiful, Original Handmade Creations</p>
            </div>
            <div className='body--image--container'>
                <img className='body--image' src={StockImg} alt="" />
            </div>
            <section className='card'>
                <img className='arrows' src={LeftArrow} alt="" />
                <div className='card1'>
                    <img className='card--img' src={StockImg4} alt="" />
                    <p>Product</p>
                    <p>$1000</p>

                </div>
                <div className='card2'>
                    <img className='card--img' src={StockImg3} alt="" />
                    <p>Product</p>
                    <p>$2000</p>
                </div>
                <img className='arrows' src={RightArrow} alt="" />
            </section>
            <section className='history'>

            </section>
        </div>
    );
}

export default Body;
