import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";



const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgbbAPI = process.env.REACT_APP_imgbb_secret;
    const navigate = useNavigate()
    const handleSignUp = (data) => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append("image", img);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imgbbAPI}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        service: data.service,
                        img: imgdata.data.url
                    }
                    // console.log(imgdata.data.url)

                    //save doctors data in database
                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Creact new Doctor Profile");
                                navigate('/dashboard/managdoctors')
                            }
                        })
                }
            })
    }
    const { data: serviceName = [], isLoading } = useQuery({
        queryKey: ['bookingSpecial'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookingSpecial');
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
    }

    return (
        <div>
            <h2 className='font-bold text-3xl mb-5'>Add New Doctor</h2>
            <form onSubmit={handleSubmit(handleSignUp)} className="max-w-sm">

                <label className=' font-medium'>Name</label>
                <input
                    className='p-3 mb-3 rounded-lg w-full border' placeholder='name' type="text"
                    {...register("name", { required: "Name is Required", minLength: { value: 4, message: "at least 4 char" } })}
                />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                <label className='font-medium'> Email</label>
                <input
                    className='p-3 mb-3 rounded-lg w-full border' placeholder='email' type="email"
                    {...register("email", { required: "Email is Required" })}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}


                <label className=' font-medium'> Specialty</label>
                <select {...register('service')} className=' p-3 mb-3 rounded-lg w-full border'>
                    {
                        serviceName.map(service => <option
                            value={service.name}
                            key={service._id}>
                            {service.name}
                        </option>)
                    }
                </select>

                <label className=' font-medium'>IMG</label>
                <input
                    className='p-3 mb-3 rounded-lg w-full border' placeholder='img' type="file"
                    {...register("img", { required: "Name is Required", minLength: { value: 4, message: "at least 4 char" } })}
                />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                <button className='btn btn-primary bg-accent p-3 mb-3 rounded-lg w-full text-gray-300 border-none' type="submit">Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctors;