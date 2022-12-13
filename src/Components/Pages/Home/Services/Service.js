import React from 'react';

const Service = ({service}) => {
    const {name, icons, description} = service;
    return (
        <div className={`card card-sid shadow-xl mt-28 py-6 px-7`}>
            <figure><img src={icons} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;