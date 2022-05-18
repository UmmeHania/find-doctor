import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center mt-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-2'>
                <h3 className='text-2xl text-primary'>Appointment</h3>
                <h2 className='text-4xl text-white mb-3'>Make an appointmrnt Today</h2>
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima, explicabo ut dignissimos quod beatae sunt suscipit reiciendis molestiae sed saepe laudantium amet iure quasi. Reiciendis placeat ratione unde sit.</p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;