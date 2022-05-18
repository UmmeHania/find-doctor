import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='text-center'>
                        <h2 class="text-xl font-semibold text-center text-secondary">{name}</h2>
                        <p>{
                            slots.length > 0
                                ? <span>{slots[0]} </span>
                                : <span className='text-base text-red-600'>Try another Date</span>
                        }</p>
                        <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                    </div>
                    <div class="card-actions justify-center">

                        <label
                            for="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            class="btn btn-secondary text-white text-uppercase">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;