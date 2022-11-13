import React from 'react';
import appoinmentChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppBanner = ({ selectDate, setSelectDate }) => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={appoinmentChair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectDate}
                        onSelect={setSelectDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppBanner;