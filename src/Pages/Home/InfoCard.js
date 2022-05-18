import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-accent shadow-xl text-white ${bgClass}`}>
                <figure className='pl-5 mt-8'>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;