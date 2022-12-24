import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className="h-96 flex justify-center items-center">
            <div className='shadow-xl w-96 p-7'>
                <h1 className='text-center text-3xl'>LogIn</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input  {...register("name")} type="text" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input  {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full" />
                    </div>
                    <br />
                    <p>{data}</p>
                    <input className='btn w-full' type="submit" value={'Login'}/>
                </form>
            </div>
        </div>
    );
};

export default Login;