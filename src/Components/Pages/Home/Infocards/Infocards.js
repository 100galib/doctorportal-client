import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import location from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import Infocard from './Infocard';

const Infocards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            data: '9:00 AM - 10:00 PM',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary text-white'
        },
        {
            id: 2,
            name: 'Visit our location',
            data: 'Brooklyn, NY 10036, United States',
            icon: location,
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            data: '+000 123 456789',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary text-white'
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                cardData.map(singleData => <Infocard key={singleData.id} singleData={singleData}></Infocard>)
            }
        </div>
    );
};

export default Infocards;