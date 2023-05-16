import './header.scss'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className='header'>
            <div className='header--container'>
                <a className='logo--container' href="/">
                    <img className='logo' src={Logo} alt="" />
                </a>
                {/* <p className='header--title'>Croucher Woodshop</p> */}
            </div>
            <section className='nav'>
                <div className='nav--container'>
                    <nav>
                        <ul className='nav--list'>
                            <Link to="/">Home</Link>
                            <Link to="/AboutMe">About</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/Portfolio">Portfolio</Link>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default Header;
