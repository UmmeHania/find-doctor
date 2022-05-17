import React from 'react';
import chair from '../../assets/images/chair.png'

const Landing = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <img src={chair} class="h-[60vh] rounded-lg shadow-2xl" />
                </div>
            </div>

        </div>
    );
};

export default Landing;