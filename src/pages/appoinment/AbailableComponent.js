import React from 'react';
import { format } from 'date-fns';

const AbailableComponent = ({ selectDate }) => {
    return (
        <div>
            <p className='text-center text-primary font-bold text-lg'>You Have Selected Date: {format(selectDate, 'PP')} </p>
        </div>
    );
};

export default AbailableComponent;