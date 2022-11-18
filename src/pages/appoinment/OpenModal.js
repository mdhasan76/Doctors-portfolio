import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from "../shared/AuthProvider"
import toast from 'react-hot-toast';

const OpenModal = ({ treatment, selectDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots } = treatment;
    const date = format(selectDate, "PP")
    const handleModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const time = form.time.value;
        const pataintName = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const booking = {
            appoinmentDate: date,
            time,
            treatment: name,
            pataintName,
            email,
            number
        }

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(booking)
                    setTreatment(null)
                    toast.success("Booking success")
                    refetch()
                } else {
                    toast.error(data.message)
                    setTreatment(null)
                }
            })

    }

    return (
        <React.Fragment>
            <input type="checkbox" id="TreatmentModal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleModal} className="modal-box relative">
                    <label htmlFor="TreatmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <input type="text" name="date" className='w-full border p-3 mb-5 rounded-lg bg-gray-300 font-semibold' value={format(selectDate, "PP")} disabled />
                    <select name="time" className="w-full border p-3 mb-5 rounded-lg bg-gray-300 font-semibold">
                        {
                            slots.map((item, i) => <option
                                className='font-semibold'
                                value={item}
                                key={i}

                            >{item}</option>)
                        }
                    </select>

                    <input type="text" className='w-full border p-3 mb-5 rounded-lg' name="name" placeholder='Full name' defaultValue={user?.name} />

                    <input type="Number" className='w-full border p-3 mb-5 rounded-lg' name="number" placeholder='Phone Number' />

                    <input type="email" defaultValue={user?.email} name='email' className='w-full border p-3 mb-5 rounded-lg' placeholder='email' />

                    <input type="submit" className='w-full bg-accent text-gray-200 p-3 mb-5 rounded-lg' value="SUBMIT" />
                </form>
            </div>
        </React.Fragment>
    );
};

export default OpenModal;