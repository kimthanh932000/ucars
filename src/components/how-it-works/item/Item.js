import React from 'react';
import './Item.scss';

const Item = ({ img, width, height, title, text }) => {
    return (
        <div className='p-hiw-item'>
            <div className='p-hiw-item__img-box'>
                {
                    img && <img src={img} className='p-hiw-item__img' alt="" width={width} height={height} />
                }
            </div>
            <span className='p-hiw-item__title u-no-wrap'>{title}</span>
            <p className='p-hiw-item__text'>
                {text}
            </p>
        </div>
    )
}

export default Item