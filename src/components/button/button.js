import React from 'react';

const Button = ({color,btnName}) => {
    return (
   <button className='w-32 h-8 rounded-full text-lg font-semibold text-white' style={{backgroundColor:color}}>
   {btnName}
   </button>
    );
};

export default Button;