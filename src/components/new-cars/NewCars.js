import React from 'react';
import './NewCars.scss';
import Categories from './categories/Categories';
import Car from './car/Car';
import data from './_data/data';
import newRideImg from 'assets/images/getting_new_ride.jpg';
import Slider from 'react-slick';
import useIsMobile from 'hooks/useIsMobile';

const NewCars = () => {
    const isMobile = useIsMobile();

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "100px",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 510,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <section className='p-new-cars'>
            <Categories />
            <div className="container">
                <div className='cars-list'>
                    {
                        isMobile ?
                            <Slider {...sliderSettings}>
                                {
                                    data.map((car, i) => <Car {...car} key={i}/>)
                                }
                            </Slider> :
                            <>
                                <div>
                                    <img src={newRideImg} alt="" width="281" height="361" />
                                </div>
                                {
                                    data.map((car, i) => <Car {...car} key={i}/>)
                                }
                            </>
                    }
                </div>
                <button className='btn-more u-cursor-pointer'>View more new cars</button>
            </div>
        </section>
    )
}

export default NewCars