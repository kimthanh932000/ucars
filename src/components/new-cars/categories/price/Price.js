import React from 'react';
import './Price.scss';

const Price = () => {
    return (
        <div className='sub-menu'>
            <div className='top price'>
                <div className='price-box'>
                    <span className='title'>Min</span>
                    <span className='value'>S&#36; 20,000</span>
                </div>
                <div className='price-box'>
                    <span className='title'>Max</span>
                    <span className='value'>S&#36; 500,000</span>
                </div>
            </div>
            <div className="bottom">
                <button className='btn--info'>Clear</button>
                <button className='btn--primary btn-save u-border-radius-sm'>Save</button>
            </div>
        </div>
    )
}

export default Price