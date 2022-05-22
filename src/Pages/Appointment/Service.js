import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:mx-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='text-center'>
                        <h2 className="text-xl font-semibold text-center text-secondary">{name}</h2>
                        <p>{
                            slots.length > 0
                                ? <span>{slots[0]} </span>
                                : <span className='text-base text-red-600'>Try another Date</span>
                        }</p>
                        <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                    </div>
                    <div className="card-actions justify-center">

                        <label
                            htmlFor="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-sm btn-secondary text-white text-uppercase bg-gradient-to-r from-secondary to-primary" >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;