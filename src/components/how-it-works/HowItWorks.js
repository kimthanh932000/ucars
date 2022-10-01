import React from 'react';
import './HowItWorks.scss';
import Item from './item/Item';
import data from './_data/data';

const HowItWorks = () => {
    return (
        <section className='p-hiw'>
            <div className='container'>
                <h2 className='p-hiw__title'>How it works.</h2>
                <p className='p-hiw__text'>This is how our products works</p>
                <div className='p-hiw-items'>
                    {
                        data.map(item => <Item {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWorks