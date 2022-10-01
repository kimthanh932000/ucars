import React, { useState } from 'react';
import './Categories.scss';
import State from './state/State';
import Price from './price/Price';
import Type from './type/Type';

const Categories = () => {
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);


  return (
    <div className='categories'>
      <form action="#" className='search-form'>
        <div className={`category ${showStateDropdown && 'active'}`}>
          <p className='category__title'>New/ Used </p>
          <span className='category__placeholder' onClick={() => setShowStateDropdown(!showStateDropdown)}>New Cars</span>
          {
            showStateDropdown && <State />
          }
        </div>
        <div className={`category ${showPriceDropdown && 'active'}`}>
          <p className='category__title'>Price Range </p>
          <span className='category__placeholder' onClick={() => setShowPriceDropdown(!showPriceDropdown)}>
            <span className="min">&#36;10,0000</span>
            <span className="max">&#36;100,0000</span>
          </span>
          {
            showPriceDropdown && <Price />
          }
        </div>
        <div className={`category ${showTypeDropdown && 'active'}`}>
          <p className='category__title'>Vehicle Type </p>
          <span className='category__placeholder' onClick={() => setShowTypeDropdown(!showTypeDropdown)}>Duplex</span>
          {
            showTypeDropdown && <Type />
          }
        </div>
        <button type='submit' className='category__btn btn--primary u-border-radius-sm'>Search</button>
      </form>
    </div>
  )
}

export default Categories