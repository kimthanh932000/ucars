import React from 'react'
import phoneIcon from 'assets/images/icons/phone.svg';
import envelopeIcon from 'assets/images/icons/envelope.svg';
import markerIcon from 'assets/images/icons/marker.svg';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <ul className='contact-list'>
          <li className='contact__item'><img src={markerIcon} alt="marker" width="12" height="17" />71 Ayer Rajah Crescent, #06-14,<br /> Singapore 139951</li>
          <li className='contact__item'><img src={envelopeIcon} alt="mail" width="18" height="14" />Email us at:<br />hello@carbuyer.com.sg</li>
          <li className='contact__item'><img src={phoneIcon} alt="phone" width="19" height="19" />+65 8808 7905 <br />+7 (700) 51 51 518</li>
        </ul>
      </div>

    </div>
  )
}

export default Contact