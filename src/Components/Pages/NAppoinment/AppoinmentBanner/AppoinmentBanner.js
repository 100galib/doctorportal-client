import React from 'react';
import bgImage from '../../../../assets/images/bg.png';
import rightImage from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppoinmentBanner = () => {
    return (
        <header className='bg-contain bg-no-repeat lg:mx-20' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={rightImage} className="shadow-2xl lg:max-w-xl" alt='banner area'/>
                    <div className='mt-20 lg:mt-10'>
                        <DayPicker></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;