import React from 'react'
import './Navbar.scss';
import logoPC from 'assets/images/logo/ucars_logo_main.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="container">
                <div className='navbar__nav'>
                    <a href="#" className='logo pc'><img src={logoPC} alt="logo" /></a>
                    <ul className='navbar-list'>
                        <li className='navbar__item'><a href="#" className='navbar__link u-no-wrap'>New Cars</a></li>
                        <li className='navbar__item'><a href="#" className='navbar__link u-no-wrap'>Used Cars</a></li>
                        <li className='navbar__item'><a href="#" className='navbar__link u-no-wrap'>Reviews</a></li>
                        <li className='navbar__item'><a href="#" className='navbar__link u-no-wrap'>News</a></li>
                    </ul>
                    <button className='navbar__btn btn--primary u-border-radius-md'>Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar