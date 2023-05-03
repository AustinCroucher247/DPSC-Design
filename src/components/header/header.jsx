import './header.scss'
import Tree from '../../assets/PineTree.png'

function Header() {
    return (
        <div className='header'>
            <div className='header--container'>
                <p className='header--title'>Croucher Woodshop</p>
            </div>
            <section className='nav'>
                <div className='nav--container'>
                    <nav>
                        <ul className='nav--list'>
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Contact
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Shop
                            </li>
                            <li>
                                Book Online
                            </li>
                            <li>
                                Gallery
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default Header;
