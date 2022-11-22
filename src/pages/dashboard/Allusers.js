import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast'
import { AuthContext } from '../shared/AuthProvider';

const Allusers = () => {
    const { removeUser } = useContext(AuthContext)
    const { data: allusers = [], refetch } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allusers");
            const data = await res.json();
            return data
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/dashboard/allusers/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make admin sucessfull")
                    refetch();
                }
            })
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/dashboard/allusers/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    removeUser().then(() => {
                        toast.success("User Delete sucessful");
                    }
                    ).catch(err => console.log(err))
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.password}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-sm'>make admin</button>
                                }</td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;