import './header.scss'
import Logo from '../../assets/logo.png'

function Header() {
    return (
        <div className='header'>
            <div className='header--container'>
                <img className='logo' src={Logo} alt="" />
                {/* <p className='header--title'>Croucher Woodshop</p> */}
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
                                Portfolio
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default Header;
