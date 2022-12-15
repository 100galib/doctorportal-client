import React from 'react';
import quotes from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import UserCard from './UserCard';

const Testimonial = () => {
    const userReview = [
        {
            id: 1,
            name: 'Wiskrew Ardnold',
            place: 'california',
            image: people1,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Jesica Revit',
            place: 'Florida',
            image: people2,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Anne Morphin',
            place: 'Pristor',
            image: people3,
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
        <div>
            <div className='flex justify-between items-center mt-20 px-12'>
                <div className='w-3/5 lg:w-4/5'>
                    <h3 className='text-secondary font-bold text-xl'>Testimonial</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <img className='lg:w-48 w-1/5' src={quotes} alt="" />
            </div>
            <div className='grid grid-cols-1 mt-20 gap-4 place-items-center lg:grid-cols-3'>
                {
                    userReview.map(review => <UserCard key={review.id} review={review}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;