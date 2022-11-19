import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../shared/AuthProvider';
import useToken from '../shared/hooks/useToken';

const SingUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail);
    if (token) {
        navigate('/')
    }
    const handleSignUp = (data) => {

        //create user in firebase
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
                saveUser(data.email, data.password, data.name)
            })
            .catch(err => console.log(err))
    }

    //save user on database
    const saveUser = (email, name, password) => {
        const user = { email, name, password }
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)
                console.log(data)
            })
    }

    //get user token from Backend
    // const getUserToken = (email) => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem("token", data.accessToken)
    //                 navigate('/')
    //             }
    //         })
    // }

    return (
        <div className='min-h-[70vh] flex items-center justify-center'>
            <div className='shadow-lg p-7 rounded-lg'>
                <h2 className='text-xl text-center mb-8 font-medium'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)} className="max-w-sm">

                    <label className=' font-medium'>Name</label>
                    <input
                        className='p-3 mb-3 rounded-lg w-full border' type="text"
                        {...register("name", { required: "Name is Required", minLength: { value: 4, message: "at least 4 char" } })}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <label className='font-medium'> Email</label>
                    <input
                        className='p-3 mb-3 rounded-lg w-full border' type="email"
                        {...register("email", { required: "Email is Required" })}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}


                    <label className=' font-medium'> Password</label>
                    <input
                        className='p-3 mb-3 rounded-lg w-full border' type="password"
                        {...register("password",
                            {
                                required: "Password Required",
                                minLength: { value: 6, message: "Min 6 char pass" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    message: "Password not Strong"
                                }
                            })}
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className='btn btn-primary bg-accent p-3 mb-3 rounded-lg w-full text-gray-300 border-none' type="submit">Submit</button>

                    <p className='text-sm text-center font-bold'>already have account? <Link to={'/login'} className='text-primary hover:link'> login</Link></p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline  p-3 mb-3 rounded-lg w-full' type="submit">Continew With GOOGLE</button>
            </div>
        </div>
    );
};

export default SingUp;