import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('token')}`
                    }
                });
                const data = await res.json();
                return data
            }
            catch (err) {
                console.log(err)
            }
        }
    })


    const handleDelete = (user) => {
        fetch(`http://localhost:5000/doctors/${user._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${user.name} Delete sucessfully`);
                    refetch()
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img src={user?.img} className='h-10 w-10 rounded-full' alt="" />
                                </td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.service}</td>
                                <td><button onClick={() => handleDelete(user)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;