import React from 'react';
import Members from './members/members';
import img11 from '../../assets/images/pic11.jpg';
import img12 from '../../assets/images/pic12.jpg';


const About = () => {
    return (
    <>
     <div className='grid grid-cols-1 p-8 gap-8 md:grid-cols-3  md:p-20'>
 
     <div className='bg-gray-100 rounded-xl col-span-2 p-8 text-lg text-justify'>
Catering is the business of providing food service at a remote site or a site such as a hotel, hospital, pub, aircraft, cruise ship, park, festival, filming location or film studio.
The earliest account of major services being catered in the United States was an event for William Howe of Philadelphia in 1778. The event served local foods that were a hit with the attendees, who eventually popularized catering as a career. The official industry began to be recognized around the 1820’s, with the caterers being disproportionately African-American.
<br/>

     </div>
     <div>
        <img src={img11} alt='img11' className='w-full rounded-xl'/>
     </div>

     <div>
        <img src={img12} alt='img12' className='w-full rounded-xl'/>
    </div>

     <div className='bg-gray-100 rounded-xl col-span-2 p-8 text-lg text-justify'>
        A caterer provides food and beverage services for events, such as weddings, corporate meetings, and other special occasions. Caterers can either work independently
         or as part of a catering company, providing a wide range of food options that can be customized to meet the needs and preferences of their clients. Catering services may include menu planning, food preparation, delivery, setup, and cleanup. Some caterers also provide additional services such as event planning, floral arrangements, and equipment rental.
    </div>
     
     
     </div>
    <div className='text-center text-lg font-bold mx-auto'>
      We started to work from January 2023
      </div>

      <div className='bg-blue-200 mt-12 p-2 rounded-full text-center font-bold text-lg w-36 mx-auto'>
         Our team
      </div>
      <Members/>
     </>
    
    );
};

export default About;