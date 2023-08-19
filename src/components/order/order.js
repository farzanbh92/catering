import React, { useState } from 'react';
import img9 from '../../assets/images/pic9.jpg';
import LoginForm from './loginform';
import RegisterForm from './registerform';

const Order = () => {

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisteropen] = useState(false);

const backgroundStyle = {backgroundImage: `url(${img9})`,opacity:'0.8'};

return (
    <div className="bg-cover bg-center grid grid-cols-1 w-full h-72 md:h-screen justify-items-center content-center mb-20" style={backgroundStyle}>
          
      <div className='grid grid-cols-1 p-4 text-center 
       bg-blue-300 md:p-8 opacity-60 hover:opacity-100 
      cursor-pointer font-bold transition-opacity duration-1000
      border-double border-4 border-black'>
         If you have any order please click the button and fill the form
         <br/>
         and if you haven't account register first
      <div className='pt-4 mx-auto'>

      <div className='grid grid-cols-2 gap-4'>    
  <button className="bg-gray-100 text-blue-700 hover:text-orange-400 py-2 px-4 rounded-md"
  onClick={() => setLoginOpen(true)}>Order</button>
  <button className="bg-gray-100 text-blue-700 hover:text-orange-400 py-2 px-4 rounded-md"
  onClick={() => setRegisteropen(true)}>Register</button>
  </div>

      <LoginForm isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
       <RegisterForm isOpen={registerOpen} onClose={() => setRegisteropen(false)} />
         </div>
      </div>

    
        
      </div>
  );
};

export default Order;