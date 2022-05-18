import React from 'react';

const Service = ({ service }) => {
    const { name, _id, img, description } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img className='w-[116px] h-[115px]' src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Service;