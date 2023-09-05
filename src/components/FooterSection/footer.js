import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

import Weblogo from './Weblogo.png';


 export const FooterSection = () => {
  return (
    <section className=" bg-black pb-10 text-white  pt-8 md:pt-16 ">
      <nav className="block md:flex justify-center md:justify-between pb-10" >
        <img className=' footerLogo' src={Weblogo} alt="Weblogo" />
        <ul className="grid grid-flow-row md:grid-flow-col gap-10 text-xs mt-10 md:mt-0 text-white not-italic font-bold leading-6">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Headphones">HEADPHONES</Link></li>
          <li><Link to="/Speakers">SPEAKERS</Link></li>
          <li><Link to="/Earphones">EARPHONES</Link></li>
        </ul>
      </nav>

      <div className="text-center md:text-left footerDescription">
        <div className="w-full md:w-1/2 text-white text-sm not-italic leading-6  opacity-80 " >
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
          music lovers and sound specialists who are devoted to helping you get the most
          out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </div>
      </div>
<div style={{margin: '0 10%'}}><div className='flex text-white pb-10 justify-center md:justify-end'>

   
  
</div>
      
      <div className='text-sm not-italic  leading-6 opacity-60 text-center md:text-left '>Copyright 2023. Adeyemi</div>
 </div>


   </section>
  );
};

export default FooterSection;
