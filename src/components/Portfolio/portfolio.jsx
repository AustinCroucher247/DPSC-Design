import './portfolio.scss'
import ImgSet17 from '../../assets/ImgSet17.jpeg'
import ImgSet15 from '../../assets/ImgSet15.jpeg'
import ImgSet9p4 from '../../assets/ImgSet9-4.jpeg'
import ImgSet6p1 from '../../assets/ImgSet6.jpeg'
import ImgSet1p2 from '../../assets/ImgSet1-2.jpeg'
import ImgSet4 from '../../assets/ImgSet4.jpeg'


function Portfolio() {
    return (
        <div class="cards-list">

            <div class="card1 11">
                <div class="card_image"> <img src={ImgSet9p4} /> </div>
                <div class="card_title title-white">
                    <p>Kitchens</p>
                </div>
            </div>

            <div class="card1 22">
                <div class="card_image">
                    <img src={ImgSet15} />
                </div>
                <div class="card_title title-white">
                    <p>Bathroom Vanities</p>
                </div>
            </div>

            <div class="card1 33">
                <div class="card_image">
                    <img src={ImgSet6p1} />
                </div>
                <div class="card_title">
                    <p>Built-ins</p>
                </div>
            </div>

            <div class="card1 44">
                <div class="card_image">
                    <img src={ImgSet4} />
                </div>
                <div class="card_title title-black">
                    <p>Furniture</p>
                </div>
            </div>
            <div class="card1 55">
                <div class="card_image">
                    <img src={ImgSet1p2} />
                </div>
                <div class="card_title title-black">
                    <p>Wall Coverings</p>
                </div>
            </div>
            <div class="card1 55">
                <div class="card_image">
                    <img src={ImgSet17} />
                </div>
                <div class="card_title title-black">
                    <p>Wood Turning</p>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;
