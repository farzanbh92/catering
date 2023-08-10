import React from 'react';
import SliderImage from './sliderimage/sliderimage';
import Menue from './menue';

const Home = () => {
    return (
        <>
        <div className='p-8'>
        <SliderImage/>
        </div>
        <Menue/>
        </>
    );
};

export default Home;