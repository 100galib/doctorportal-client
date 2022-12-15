import React from 'react';

const UserCard = ({review}) => {
    const {name, place, image, details} = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center'>
                    <img className='w-14 h-14' src={image} alt="" />
                    <div className='ml-3'>
                        <h1 className='-mb-1 font-bold'>{name}</h1>
                        <h3>{place}</h3>
                    </div>
                </div>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default UserCard;