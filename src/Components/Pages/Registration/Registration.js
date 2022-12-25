import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit } = useForm();

    const handleRegistration = data => {
        console.log(data)
    }

    return (
        <div className="h-96 flex justify-center items-center my-28">
            <div className='shadow-xl w-96 p-7'>
                <h1 className='text-center text-3xl font-bold'>Registration</h1>
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input  {...register("name")} type="text" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input  {...register("email")} type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input  {...register("password")} type="password" className="input input-bordered w-full" />
                    </div>
                    <input className='btn w-full mt-5' type="submit" value={'Signup'}/>
                </form>
                <p className='text-xs text-center mt-3'>Already Have an Account ? <Link to={'/login'} className='text-secondary'>logIn</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Registration;