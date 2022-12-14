import React, { useState } from 'react';
import { format } from 'date-fns';
import AppoinmentCart from './AppoinmentCart';
import OpenModal from './OpenModal';
import { useQuery } from '@tanstack/react-query';

const AbailableComponent = ({ selectDate }) => {
    // const [appon, setAppoin] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectDate, "PP");
    const { data: appon = [], refetch } = useQuery({
        queryKey: ["appoinmentlist", date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-mdhasan76.vercel.app/appoinmentlist?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    // useEffect(() => {
    //     fetch("https://doctors-portal-server-mdhasan76.vercel.app/appoinmentlist")
    //         .then(res => res.json())
    //         .then(data => setAppoin(data))
    // }, [])
    // console.log(appon)
    return (
        <div className='my-10'>
            <p className='text-center text-primary font-bold text-lg py-6'>You Have Selected Date: {format(selectDate, 'PP')} </p>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    appon.map(appoinment => <AppoinmentCart
                        key={appoinment._id}
                        appoinmentOption={appoinment}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <OpenModal
                    treatment={treatment}
                    selectDate={selectDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default AbailableComponent;