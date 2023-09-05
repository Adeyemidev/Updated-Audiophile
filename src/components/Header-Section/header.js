import React from 'react';
import bitmap from '../images/try.jfif'
import './header.css';
import { Link } from 'react-router-dom';

export const Header = (props) => {
 
  return (<div> 
 

    <section className= "bg-black py-32 pt-40 md:pt-38 block md:flex justify-center relative z-0 md:justify-around md:px-24 md:pb-8 text-center md:text-left mb-18 items-center">

  <div className=' md:ml-10'>
    <p className=' newproduct opacity-60'>NEW PRODUCT</p>
    <p className="XX99 pt-4 md:pt-0">XX99 MARK II<br />HEADPHONES</p>
    <p className="pt-8 text-white experience opacity-60 font-normal leading-6 text-sm px-2 sm:w-2/3">Experience natural, lifelike audio and exceptional built quality made for the passionate music enthusiast.</p>
<Link to="/xx99mark11"><button  className="button font-bold text-xs tracking-tight border-2 py-3 px-8 text-white border-none my-6 ">SEE PRODUCT</button>
</Link>
  </div>

  <div className='md:mr-10'>
    <img   className="firstimg m-auto" src={bitmap} alt="headphones" />

   </div>
   

    </section></div>
  );
};
