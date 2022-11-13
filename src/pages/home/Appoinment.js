import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import MyButton from '../../neededComponent/MyButton';

const Appoinment = () => {
    return (
        <section style={{ background: `url(${appoinment})` }} className="my-16">
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img alt="" src={doctor} className="-mt-36 hidden md:block md:w-1/2" />
                    <div className='p-5'>
                        <h1 className="text-lg text-primary font-bold">Appoinment</h1>
                        <h3 className='text-2xl pt-3'>Make an appoinment Today</h3>
                        <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <MyButton>Get Started</MyButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;