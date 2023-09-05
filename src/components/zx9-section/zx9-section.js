
import React from 'react';
import './zx9-section.css'
import zx9 from '../images/image-speaker-zx9.png'
import { Link } from 'react-router-dom';
export const ZX9Section = () => {
    return (
        <section className="zx9">
        <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-between pt-6 md:pt-20 px-10 md:px-16 pb-0 mb-18 border-2 border-none rounded-lg" >
          <div className=" ">
            <img className="image-speaker-zx9" src={zx9} alt="" />
          </div>
      
          <div className="text-white pt-10  text-center md:text-left">
            <span className="text-white font-bold text-3xl md:text-7xl leading-10 text-center">ZX9<br />SPEAKER</span>
            <p className="pt-6 w-full md:w-80 text-sm">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
           <Link to= "/Product/zx9-speaker"><button className=" bg-black  mt-4 mb-10 py-3 px-8  font-bold text-xs tracking-tight ">SEE PRODUCT</button></Link>
          </div>
        </div>
      </section>
    );
  };