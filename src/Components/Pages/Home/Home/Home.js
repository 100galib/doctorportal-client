import React from 'react';
import Banner from '../Banner/Banner';
import bgImage from '../../../../assets/images/bg.png';
import Infocards from '../Infocards/Infocards';

const Home = () => {
    return (
        <div>
            <div className='bg-contain bg-no-repeat lg:mx-20' style={{ backgroundImage: `url(${bgImage})` }}>
                <Banner></Banner>
                <Infocards></Infocards>
            </div>
        </div>
    );
};

export default Home;