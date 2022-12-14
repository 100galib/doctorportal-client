import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvider';

const Registration = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const {signup, updateUser, googleSignUp} = useContext(AuthContex);
    const navigate = useNavigate();

    const handleRegistration = data => {
        signup(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user);
            const upUser = {
                displayName: data.name
            }
            updateUser(upUser)
            .then(() => {})
            .catch(error => console.error(error))
            navigate('/')
        })
        .catch(error => console.error('error', error))
    }

    const googleSignIn = () => {
        googleSignUp()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
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
                        <input  {...register("name", {required: "You must give your name"})} type="text" className="input input-bordered w-full" />
                        {errors.name && <p role="alert" className='mt-2 text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input  {...register("email", {required: "Email is required"})} type="email" className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='mt-2 text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input  {...register("password", {required: 'Password Is required', minLength: {value: 8, message: 'Password Must Be Eight Character'}})} type="password" className="input input-bordered w-full" />
                        {errors.password && <p role="alert" className='mt-2 text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full mt-5' type="submit" value={'Signup'}/>
                </form>
                <p className='text-xs text-center mt-3'>Already Have an Account ? <Link to={'/login'} className='text-secondary'>logIn</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Registration;