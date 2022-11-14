import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom"
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data)
        console.log(errors)
    }
    return (
        <div className='min-h-[70vh] flex items-center justify-center'>
            <div className='shadow-lg p-7 rounded-lg'>
                <h2 className='text-xl text-center mb-8 font-medium'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="max-w-sm">

                    <label className=' font-medium'> Email</label>
                    <input className='p-3 mb-3 rounded-lg w-full border font-bold' {...register("email", { required: "Email is required" })} type="email" />

                    {errors.email && <p role="alert" className='text-rose-400'>{errors.email?.message}</p>}


                    <label className=' font-medium'> Password</label>
                    <input className='p-3 rounded-lg w-full border' {...register("password", { required: "Password Required", minLength: { value: 6, message: "Password must be 6 char" } })} type="password" />
                    {errors.password && <p role="alert" className='text-rose-400'>{errors.password?.message}</p>}
                    <p className='mb-3 '><Link className='text-sm hover:link'>Forget Password?</Link></p>

                    <button className='btn btn-primary bg-accent p-3 mb-3 rounded-lg w-full text-gray-300 border-none' type="submit">Submit</button>

                    <p className='text-sm text-center font-bold'>New to Doctors portals? <Link to={'/signup'} className='text-primary hover:link'>Create new account</Link></p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline  p-3 mb-3 rounded-lg w-full' type="submit">Continew With GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;