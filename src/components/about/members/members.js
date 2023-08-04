import React from 'react';
import img13 from '../../../assets/images/pic13.jpg';
import img14 from '../../../assets/images/pic14.jpg'; 

const Members = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 py-8 md:px-32 gap-y-8 justify-items-center'>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img13} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name1</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img14} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name2</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img13} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name3</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img14} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name4</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img13} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name5</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img14} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name6</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img13} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name7</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img14} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name8</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

         <div className='bg-green-200 p-4 w-40 rounded-2xl'>
           <img src={img13} alt='' className='mx-auto'/>
           <div className='font-bold text-lg text-center mt-4'>name9</div>
           <div className='font-medium text-lg text-center mt-2'>chef</div>
         </div>

      </div>
    );
};

export default Members;