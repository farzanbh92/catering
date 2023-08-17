import React from 'react';
import logo from '../../assets/images/logo.png';

import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false);

const toggleDrawer=()=>{
  setIsDrawerOpen(!isDrawerOpen);
}
    return (
        <header className='flex flex-row bg-gray-100'>

        <div className='px-4 md:px-8 md:ml-8'>
          <img src={logo} alt='logo' className='w-28'/>
        </div>

        <div className='text-2xl md:text-5xl font-medium self-center px-12 md:ml-8'>
         Master Chef
        </div>

        <div className='hidden md:flex self-center px-24 md:ml-20'>
           <ul className="flex space-x-12">
          <li>
            <Link
              to="/"
              className="text-black hover:text-orange-300 font-bold text-xl transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="text-black hover:text-orange-300  font-bold text-xl transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link
              to="order"
              className="text-black hover:text-orange-300  font-bold text-xl transition-colors duration-300">
              Order
            </Link>
          </li>
        </ul>
        </div>

        <div className='md:flex self-center space-x-8 pl-4'>
        
        
         <button className='md:hidden text-black hover:text-orange-300' onClick={toggleDrawer}>☰</button> 

         <div className={`${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} 
         md:hidden fixed top-0 right-0 h-full w-1/3 bg-gray-200 text-black text-base font-medium transform transition-transform ease-in-out duration-1000 z-10`}>
                <ul className="space-y-8 pt-8">

                  <li className='text-center hover:text-orange-300'>
                  <Link to=''>home</Link>
                  </li>

                  <li className='text-center hover:text-orange-300'>
                  <Link to='about'>About</Link>
                  </li>

                  <li className='text-center hover:text-orange-300'>
                  <Link to='order'>Order</Link>
                  </li>
                  
                  <li className='text-center'>
                  <button className="md:hidden text-black text-xl hover:text-orange-300" onClick={toggleDrawer}>
                  ☰
                </button>
                  </li>
                </ul>
        </div>
       </div>
     </header>
    );
};

export default Header;