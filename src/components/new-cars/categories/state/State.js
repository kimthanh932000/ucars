import React from 'react';
import './State.scss';

const State = () => {
    return (
        <div className='sub-menu'>
            <label className="radio" htmlFor='authorised'>
                <input type="radio" name="state" id="authorised" />
                New Car (Authorised Dealer)
                <span className="checkmark"></span>
            </label>
            <label className="radio" htmlFor='parallel-importer'>
                <input type="radio" name="state" id="parallel-importer" />
                New Car (Parallel Importer)
                <span className="checkmark"></span>
            </label>
            <label className="radio" htmlFor='used-cards'>
                <input type="radio" name="state" id="used-cards" />
                Used Cars
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default State