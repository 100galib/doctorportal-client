import React from 'react';
import icon1 from '../../../../assets/images/fluoride.png';
import icon2 from '../../../../assets/images/cavity.png';
import icon3 from '../../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            icons: icon1,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            name: "Cavity Filling",
            icons: icon2,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            name: "Teeth Whitening",
            icons: icon3,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div>
            <h3 className='text-center text-secondary font-bold mt-32'>OUR SERVICES</h3>
            <h1 className='text-4xl text-center mb-12'>Services We Provide</h1>
            <div  className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;