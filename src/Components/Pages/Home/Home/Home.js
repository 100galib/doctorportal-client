import React from 'react';
import Banner from '../Banner/Banner';
import bgImage from '../../../../assets/images/bg.png';
import Infocards from '../Infocards/Infocards';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';

const Home = () => {
    return (
        <div>
            <div className='bg-contain bg-no-repeat lg:mx-20' style={{ backgroundImage: `url(${bgImage})` }}>
                <Banner></Banner>
                <Infocards></Infocards>
            </div>
            <Services></Services>
            <Terms></Terms>
        </div>
    );
};

export default Home;