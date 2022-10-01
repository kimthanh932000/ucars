import React, { useState, useEffect } from 'react';
import './Footer.scss';
import carBuyerLogoPc from 'assets/images/logo/carbuyer_logo_footer_pc.svg';
import carBuyerLogoSP from 'assets/images/logo/carbuyer_logo_footer_sp.svg';
import ucarLogo from 'assets/images/logo/ucars_logo_main.svg';
import phoneIcon from 'assets/images/icons/phone.svg';
import envelopeIcon from 'assets/images/icons/envelope.svg';
import markerIcon from 'assets/images/icons/marker.svg';
import instaIcon from 'assets/images/icons/insta.svg';
import fbIcon from 'assets/images/icons/fb.svg';
import airplaneIcon from 'assets/images/icons/airplane.svg';
import inIcon from 'assets/images/icons/in.svg';
import youtubeIcon from 'assets/images/icons/youtube.svg';
import useIsMobile from 'hooks/useIsMobile';
import data from './_data/data';

const Footer = () => {
    const isMobile = useIsMobile();
    const [menuItems, setMenuItems] = useState(data);

    const toggleMenu = (e, targetPos) => {
        if (isMobile) {
            setMenuItems(menuItems.map((menu, i) => {
                return {
                    ...menu,
                    active: targetPos === i && !menu.active
                }
            }))
        }
    }

    useEffect(() => {
        if (!isMobile) {
            setMenuItems(menuItems.map(item => ({
                ...item,
                active: true
            })))
        } else {
            setMenuItems(menuItems.map(item => ({
                ...item,
                active: false
            })))
        }
    }, [isMobile])

    return (
        <footer className='l-footer'>
            <div className="container">
                <div className='top'>
                    <div className='contact'>
                        <img src={isMobile ? carBuyerLogoSP : carBuyerLogoPc} alt="" />
                        <ul>
                            <li className='contact__item'>
                                <img className='contact__icon' src={markerIcon} alt="" width="11" />
                                <span>71 Ayer Rajah Crescent, #06-14, Singapore 139951</span>
                            </li>
                            <li className='contact__item'>
                                <img className='contact__icon' src={phoneIcon} alt="" width="12" />
                                <span> +65 8808 7905</span>

                            </li>
                            <li className='contact__item'>
                                <img className='contact__icon' src={envelopeIcon} alt="" width="13" />
                                <span>hello@carbuyer.com.sg</span>
                            </li>
                        </ul>
                    </div>
                    {
                        menuItems.map((menu, i) => {
                            if (menu.title !== 'Legal' || isMobile) {
                                return (
                                    <div className='menu' onClick={(e) => toggleMenu(e, i)}>
                                        <div className='u-fw-600 menu__title'>{menu.title}</div>
                                        {
                                            // menu.active && <ul className='menu-list'>
                                            //     {
                                            //         menu.items.map(item => <li className='menu__item'><a href="#">{item}</a></li>)
                                            //     }
                                            // </ul>
                                            <ul className={`menu-list ${menu.active ? 'u-d-block' : 'u-d-none'}`}>
                                                {
                                                    menu.items.map(item => <li className='menu__item'><a href="#">{item}</a></li>)
                                                }
                                            </ul>
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                    <div className='subscription'>
                        <span>Get the <a href="#" className='u-text-red'>latest</a> automotive news sent to your inbox!</span>
                        <form action="#" className='p-sub-form'>
                            <input type="email" placeholder='Enter your email' className='p-sub-form__input' />
                            <button type='submit' className='btn--primary p-sub-form__btn'>Subscribe</button>
                        </form>
                        <div className='socials-box'>
                            <span>Follow us</span>
                            <ul>
                                <li><a href="#"><img src={instaIcon} alt="" /></a></li>
                                <li><a href="#"><img src={fbIcon} alt="" /></a></li>
                                <li><a href="#"><img src={airplaneIcon} alt="" /></a></li>
                                <li><a href="#"><img src={inIcon} alt="" /></a></li>
                                <li><a href="#"><img src={youtubeIcon} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    {
                        !isMobile &&
                        <div className='legal'>
                            <ul>
                                <li className='legal__item'><a href="#" className='legal__link'>Advertising Terms and Conditions</a></li>
                                <li className='legal__item'><a href="#" className='legal__link'>Platform Terms and Conditions</a></li>
                                <li className='legal__item'><a href="#" className='legal__link'>Privacy Policy</a></li>
                            </ul>
                            <div className='copyright'>
                                <p>© 2022. All rights reserved.</p>
                            </div>
                        </div>
                    }
                    <div className='ownership'>
                        <a href="#"><img src={ucarLogo} alt="" width="55" /></a>
                        <p>CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by UCARS Pte Ltd</p>
                    </div>
                    {
                        isMobile && <div className='copyright'>
                            <p>© 2022. All rights reserved.</p>
                        </div>
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer