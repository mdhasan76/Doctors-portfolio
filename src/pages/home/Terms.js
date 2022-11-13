import React from 'react';
import img from '../../assets/images/treatment.png'
import MyButton from '../../neededComponent/MyButton';
const Terms = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center w-4/5 mx-auto py-20'>
            <div>
                <img src={img} className=" rounded-lg" alt="" />
            </div>
            <div className='p-5'>
                <h2 className='text-4xl font-bold'>Exeptional Dental Care, on Your Terms</h2>
                <p className='text-sm py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <MyButton>Get Started</MyButton>
            </div>
        </div>
    );
};

export default Terms;