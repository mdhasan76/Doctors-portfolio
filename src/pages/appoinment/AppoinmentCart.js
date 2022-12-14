import React from 'react';

const AppoinmentCart = ({ appoinmentOption, setTreatment }) => {
    const { slots, name, price } = appoinmentOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title text-2xl text-primary justify-center">{name}</h2>
                <p className='text-center text-sm py-2 font-medium'>
                    {
                        slots.length ? slots[0] : "Try Another Day"
                    }
                </p>
                <p className='text-center text-sm'>
                    {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
                </p>
                <p className='text-center'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="TreatmentModal"
                        disabled={slots.length === 0}
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appoinmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentCart;