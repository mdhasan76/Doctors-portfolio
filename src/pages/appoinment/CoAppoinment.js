import React, { useState } from 'react';
import AbailableComponent from './AbailableComponent';
import AppBanner from './AppBanner';

const CoAppoinment = () => {

    const [selectDate, setSelectDate] = useState(new Date())
    return (
        <div>
            <AppBanner selectDate={selectDate} setSelectDate={setSelectDate} />
            <AbailableComponent selectDate={selectDate} />
        </div>
    );
};

export default CoAppoinment;