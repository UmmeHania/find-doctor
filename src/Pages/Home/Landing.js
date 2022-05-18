import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';


const Landing = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen bg-base">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>get started</PrimaryButton>
                    </div>
                    <div className='sm:h-[60vh] shrink-0'>
                        <img src={chair} className="lg:h-[60vh] rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Landing;