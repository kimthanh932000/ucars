import React from 'react';
import './Visual.scss';

const Visual = () => {
    return (
        <section className='p-visual'>
            <div className="container p-visual__bg">
                <div className='content-box'>
                    <h1 className='p-visual__title'>Car Marketplace</h1>
                    <p className='p-visual__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nunc odio in et, lectus sit lorem id integer.</p>
                    <button className='p-visual__btn btn--primary u-border-radius-md'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Visual