import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Newsletter = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ background: `url(${appointment})` }}>

                <div class="">
                    <div class="hero-content flex-col">
                        <h1 class="text-3xl font-bold text-primary ">Contact Us</h1>
                        <p class="text-4xl text-white">Stay Connected with Us</p>
                    </div>
                    <div class="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="Your Name" class="input input-bordered " />
                            </div>
                            <div class="form-control">
                                <input type="text" placeholder="Email Address" class="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your Message" class="input input-bordered" />
                            </div>

                            <div class="text-center">
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