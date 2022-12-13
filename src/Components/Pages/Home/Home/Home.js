import React from 'react';
import Banner from '../Banner/Banner';
import bgImage from '../../../../assets/images/bg.png';
import Infocards from '../Infocards/Infocards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='bg-contain bg-no-repeat lg:mx-20' style={{ backgroundImage: `url(${bgImage})` }}>
                <Banner></Banner>
                <Infocards></Infocards>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;