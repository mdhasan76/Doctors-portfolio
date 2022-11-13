import React from 'react';
import { format } from 'date-fns'

const OpenModal = ({ treatment, selectDate, setTreatment }) => {
    const { name, slots } = treatment;
    const handleModal = (e) => {
        e.preventDefault();
        const form = e.target;
        const time = form.time.value;
        const pataintName = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const booking = {
            appoinmentDate: selectDate,
            time,
            treatment: name,
            pataintName,
            email,
            number
        }

        console.log(booking)
        setTreatment(null)
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

                    <input type="text" className='w-full border p-3 mb-5 rounded-lg' name="name" placeholder='Full name' />
                    <input type="Number" className='w-full border p-3 mb-5 rounded-lg' name="number" placeholder='Phone Number' />
                    <input type="email" name='email' className='w-full border p-3 mb-5 rounded-lg' placeholder='email' />
                    <input type="submit" className='w-full bg-accent text-gray-200 p-3 mb-5 rounded-lg' value="SUBMIT" />
                </form>
            </div>
        </React.Fragment>
    );
};

export default OpenModal;