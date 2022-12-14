import React from 'react';
import chair from "../../assets/images/chair.png"
import MyButton from '../../neededComponent/MyButton';


const Banner = () => {
    return (
        <div className="hero py-10 bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={chair} className="w-full md:w-1/2 rounded-lg shadow-2xl" alt='/' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <MyButton>Get Started</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;