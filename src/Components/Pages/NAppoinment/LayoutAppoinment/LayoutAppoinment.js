import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvilableApoinment from '../AvilableApoinment/AvilableApoinment';

const LayoutAppoinment = () => {
    const [select, setSelected] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner select={select} setSelected={setSelected}></AppoinmentBanner>
            <AvilableApoinment select={select}></AvilableApoinment>
        </div>
    );
};

export default LayoutAppoinment;