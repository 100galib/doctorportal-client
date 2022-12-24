import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppinmentSlots from './AvailableAppinmentSlots';

const AvilableApoinment = ({select}) => {
    const [appoinment, setAppoinment] = useState([]);

    useEffect(() => {
        fetch('appoinment.json')
        .then(res => res.json())
        .then(doc => setAppoinment(doc))
    }, [])
    return (
        <section className='my-10'>
            <div  className='text-center mt-10 text-secondary font-bold'>
                {select ? <p>You Select {format(select, 'PPPP')}.</p> : <p>Please Select a date !</p>}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-9'>
                {
                    appoinment.map(option => <AvailableAppinmentSlots key={option._id} aviableOption={option}></AvailableAppinmentSlots>)
                }
            </div>
        </section>
    );
};

export default AvilableApoinment;