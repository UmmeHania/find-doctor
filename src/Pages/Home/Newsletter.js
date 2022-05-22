import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Newsletter = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${appointment})` }}>

                <div className="">
                    <div className="hero-content flex-col">
                        <h1 className="text-3xl font-bold text-primary ">Contact Us</h1>
                        <p className="text-4xl text-white">Stay Connected with Us</p>
                    </div>
                    <div className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your Message" className="input input-bordered" />
                            </div>

                            <div className="text-center">
                                <PrimaryButton>submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Newsletter;