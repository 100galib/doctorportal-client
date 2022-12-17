import React from 'react';

const Infocard = ({singleData}) => {
    const {name, data, icon, bgColor} = singleData;
    return (
        <div className={`card card-side ${bgColor} text-white shadow-xl lg:mt-28 py-6 px-7`}>
            <figure><img src={icon} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default Infocard;