import React from 'react';
import doctor from '../../../../assets/images/doctor-small.png'
import appoinment from '../../../../assets/images/appointment.png'

const Appoinment = () => {
    return (
            <section className='bg-cover bg-no-repeat bg-center lg:mt-80'  style={{ backgroundImage: `url(${appoinment})` }}>
                <div className="hero">
                    <div className="hero-content p-0 flex-col lg:flex-row">
                        <img className='hidden lg:block w-3/5 -mt-56' src={doctor} alt='appoinment'/>
                        <div>
                            <h3 className='font-bold text-secondary text-xl pt-9'>Appointment</h3>
                            <h1 className="text-4xl font-bold text-white my-4">Make an appointment Today</h1>
                            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Appoinment;