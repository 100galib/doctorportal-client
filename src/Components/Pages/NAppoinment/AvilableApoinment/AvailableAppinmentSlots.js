import React from 'react';

const AvailableAppinmentSlots = ({aviableOption, setTreatment}) => {
    const {name, slots} = aviableOption;
    return (
        <div className="card w-96 shadow-xl lg:mt-10">
            <div className="card-body my-6 text-center">
                <h2 className="card-title mx-auto text-secondary font-bold text-2xl">{name}</h2>
                <p className='font-bold'>{slots.length > 0 ? slots[0] : 'No Slots Avialble'}</p>
                <p >{slots.length > 0 ? slots.length : '0'} Space Avalable</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(aviableOption)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppinmentSlots;