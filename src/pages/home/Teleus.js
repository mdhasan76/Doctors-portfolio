import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Teleus = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white'>
            <div className='flex flex-col sm:flex-row items-center p-10 bg-gradient-to-r from-primary to-secondary rounded-lg'>
                <div className='text-7xl'>
                    <AiOutlineClockCircle />
                </div>
                <div className='pl-2'>
                    <h3 className='text-lg font-medium mb-2'>Opening Hours</h3>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center p-10 bg-accent rounded-lg'>
                <div className='text-7xl'>
                    <MdLocationOn />
                </div>
                <div className='pl-2'>
                    <h3 className='text-lg font-medium mb-2'>Visit our Location</h3>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center p-10 bg-gradient-to-r from-indigo-500  to-pink-500 rounded-lg'>
                <div className='text-7xl'>
                    <FiPhoneCall />
                </div>
                <div className='pl-2'>
                    <h3 className='text-lg font-medium mb-2'>Contact us now</h3>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Teleus;