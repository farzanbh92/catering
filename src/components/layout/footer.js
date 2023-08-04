import React from 'react';
import instagram from '../../assets/images/instagram.png';
import telegram from '../../assets/images/telegram.png';
import watsapp from '../../assets/images/whatsapp.png';

const Footer = () => {
    return (
      <> 
   <div className='bg-white h-96 mx-8'>
    <div className='text-lg my-4 pl-10 pt-4 md:text-2xl border-t-2 border-black font-medium'>
    You don't need to eat less, You need to eat right 
    </div>
    <div className='pl-8'>
    We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggest criteria of them all, both look and taste. 
    </div>
    <div className='pl-10 pt-4 text-lg font-medium text-green-600'>
    Catering Service, 42nd St, Melbourne, Victoria
    </div>
    <div className='pl-10 text-lg font-medium text-green-600'>
    Tel:1300 123 456
    </div>
    <div className='pl-10 text-lg font-medium text-blue-400'>
      <a href='mailto:frzcatering@gmail.com'>Email:frzcatering@gmail.com</a>
    </div>
    <div className='grid grid-cols-3 h-12 w-36 mt-8 gap-2 mx-auto'>
    <img src={instagram} alt='instagram'  className='w-full cursor-pointer'/>
     
     <img src={watsapp} alt='watsapp'  className='w-full cursor-pointer'/>
     
     <img src={telegram} alt='telegram'  className='w-full cursor-pointer'/>
    </div>
   
   </div>
   
   <div className='text-center mt-16 py-4 bg-gray-200'> &copy; All rights reserved</div>
   </> 
    );
};

export default Footer;