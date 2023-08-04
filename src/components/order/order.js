import React from 'react';
import img9 from '../../assets/images/pic9.jpg';
import Button from '../button/button';

const Order = () => {

const backgroundStyle = {backgroundImage: `url(${img9})`,opacity:'0.8'};

return (
    <div className="bg-cover bg-center grid grid-cols-1 w-full h-screen justify-items-center content-center mb-20" style={backgroundStyle}>
          
      <div className='grid grid-cols-1 p-4 text-center bg-yellow-200 md:p-8 opacity-60 hover:opacity-100 cursor-pointer font-bold rounded-full transition-opacity duration-1000'>
         If you have any order please click the button and fill the form
         <div className='pt-4 mx-auto'><Button btnName={'Order'} color={'green'}/></div>
      </div>
      
        
      </div>
  );
};

export default Order;