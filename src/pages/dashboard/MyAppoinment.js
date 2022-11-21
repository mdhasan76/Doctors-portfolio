import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../shared/AuthProvider';
import { Link } from 'react-router-dom'

const MyAppoinment = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    // console.log(bookings)
    if (isLoading) {
        return <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) =>
                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.pataintName}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.time}</td>
                                    <td>
                                        {
                                            booking?.price && !booking?.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-sm btn-primary text-white'>Pay Now</button></Link>
                                        }
                                        {
                                            booking?.paid && booking?.price && <p>paid</p>
                                        }

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;