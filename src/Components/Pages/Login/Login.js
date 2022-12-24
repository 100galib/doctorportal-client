import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className="h-96 flex justify-center items-center my-10">
            <div className='shadow-xl w-96 p-7'>
                <h1 className='text-center text-3xl font-bold'>LogIn</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input  {...register("email")} type="text" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input  {...register("password")} type="password" className="input input-bordered w-full" />
                    </div>
                    <label className="label"> 
                            <span className="label-text">Forgot Password</span>
                    </label>
                    <input className='btn w-full' type="submit" value={'Login'}/>
                </form>
                <p className='text-xs text-center mt-3'>New To Doctor Portal ? <Link to={'/registration'} className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;