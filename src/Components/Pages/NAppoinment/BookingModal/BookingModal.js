import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment, select, setTreatment}) => {
    const {name, slots} = treatment;
    const setDate = format(select, 'PPPP')

    const bookingFuntion = event => {
        event.preventDefault()
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.selectedSlot.value;
        const selectedDate = setDate;
        const todayDate = new Date();

        const booking = {
            patientName,
            treatmentName : name,
            email,
            phone,
            slot,
            selectedDate,
            todayDate
        }

        setTreatment(null)
        console.log(booking)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={bookingFuntion} className='mt-10 grid grid-cols-1 gap-3'>
                        <input name='selectedDate' type="text" disabled defaultValue={setDate} className="input input-bordered w-full" />
                        <select name='selectedSlot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full" />
                        <input className='btn' type="submit" value={'Submit'} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;