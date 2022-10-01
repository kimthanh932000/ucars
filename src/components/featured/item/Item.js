import React from 'react';
import './Item.scss';

const Item = ({ img, name, type, model, price }) => {
    return (
        <div className='p-featured-car'>
            <img src={img} alt="" className="p-featured-car__img" />
            <div className='p-featured-car-details'>
                <div className='left'>
                    <span className="p-featured-car__name">{name}</span>
                    <span className="p-featured-car__type">{type}</span>
                </div>
                <div className='right'>
                    <span className='p-featured-car__model'>{model}</span>
                    <span className="p-featured-car__price">{price}</span>
                </div>
            </div>
        </div>
    )
}

export default Item