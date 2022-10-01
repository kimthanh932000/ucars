import React from 'react';
import Contact from './contact/Contact';
import './Header.scss';
import Navbar from './navbar/Navbar';
import logoSP from 'assets/images/logo/carbuyer_logo_header_sp.svg';
import searchIcon from 'assets/images/icons/search.svg';

const Header = () => {
    return (
        <header className='l-header'>
            {/* <div className='container'> */}
            <div className='l-header-sp'>
                <img src={logoSP} alt="" className='l-header-sp__logo' />
                <img src={searchIcon} alt="" />
            </div>
            <Contact />
            <Navbar />
            {/* </div> */}
        </header>
    )
}

export default Header