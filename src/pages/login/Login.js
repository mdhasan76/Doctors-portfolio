import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from '../shared/AuthProvider';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    const { logIn } = useContext(AuthContext)
    const handleLogin = (data) => {
        console.log(data)
        logIn(data.email, data.password)
            .then(res => {
                console.log(res.user)
                toast.seccess("LogIn sucess")
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))
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


                    {
                        error && <p className='text-red-500 py-2'>{error}</p>
                    }


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