import React from 'react';
import bgImage from '../../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className='mt-40' style={{backgroundImage: `url(${bgImage})`}}>
            <h3 className='text-center font-bold text-secondary pt-16'>Contact Us</h3>
            <h1 className='text-center text-4xl mb-10 text-white'>Stay connected with us</h1>
            <form className='text-center flex flex-col items-center'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-md mb-5" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-md mb-5" />
                <textarea className="textarea textarea-bordered w-full max-w-md mb-9" placeholder="Your Message"></textarea>
                <button type='submit' className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white w-36 mb-16">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;