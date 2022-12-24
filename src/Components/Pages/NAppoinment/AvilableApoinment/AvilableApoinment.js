import React from 'react';
import { format } from 'date-fns';

const AvilableApoinment = ({select}) => {
    return (
        <section>
            <div  className='text-center mt-10 text-secondary font-bold'>
                {select ? <p>You Select {format(select, 'PPPP')}.</p> : <p>Please Select a date !</p>}
            </div>
        </section>
    );
};

export default AvilableApoinment;