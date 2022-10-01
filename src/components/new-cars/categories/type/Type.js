import React from 'react';
import './Type.scss';

const Type = () => {
    const firstGroup = ['Bus', 'Classic Car', 'Coupe', 'Convertible', 'Hatchback'];
    const secondGroup = ['Lorry', 'MPV', 'Pickup', 'Sedan', 'Sport Car'];
    const thirdGroup = ['SUV', 'Truck', 'Van (Passenger)', 'Van (Goods)', 'Wagon'];

    return (
        <div className='sub-menu sub-menu-type'>
            <div className='top'>
                <div className="group">
                    {
                        firstGroup.map(item => (
                            <label className="checkbox">
                                <input type="checkbox" name="type" />
                                {item}
                                <span className="checkmark"></span>
                            </label>
                        ))
                    }
                </div>
                <div className="group">
                    {
                        secondGroup.map(item => (
                            <label className="checkbox">
                                <input type="checkbox" name="type" />
                                {item}
                                <span className="checkmark"></span>
                            </label>
                        ))
                    }
                </div>
                <div className="group">
                    {
                        thirdGroup.map(item => (
                            <label className="checkbox">
                                <input type="checkbox" name="type" />
                                {item}
                                <span className="checkmark"></span>
                            </label>
                        ))
                    }
                </div>
            </div>
            <div className="bottom">
                <button className='btn--info'>Clear</button>
                <button className='btn--primary btn-save u-border-radius-sm'>Save</button>
            </div>
        </div>
    )
}

export default Type