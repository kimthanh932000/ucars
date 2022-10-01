import React from 'react';
import './Car.scss';
import bmwLogo from 'assets/images/brands/bmw.svg';
import bmw_x3 from 'assets/images/cars/bmw_x3.jpg';

const Car = ({ name, img, posterImg, total, perMonth, variant, makerLogo, makerName }) => {
  return (
    <div className='p-car'>
      <img src={img} alt="" className='p-car__img' />
      <div className="p-car-details">
        <span className='p-car__name u-fw-600 u-no-wrap'>{name}</span>
        <span>
          {
            total ? 'From' : 'POA'
          }
          <span className='p-car__total u-fw-600'> {total}</span>
          <span className='p-car__per-month'>&#36;{perMonth}/mo</span>
        </span>
        <span className='p-car__variant'>{variant}</span>
        <span className='p-car__maker'>
          <img src={makerLogo} alt="logo" width="32" height="32" className='p-car__maker-logo' />
          <span className='p-car__maker-name'>{makerName}</span>
        </span>
      </div>
    </div>
  )
}

export default Car