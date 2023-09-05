import React from 'react';
import zx7 from '../images/zx7-speaker - Copy.png'
import './zx7-section.css'
import { Link } from 'react-router-dom';

export const ZX7Section = () => {
    return (
        <section className="fifth-section ">
        <div className="flex justify-end md:justify-between items-center pt-0 ml-20 sm:ml-4 md:ml-20 ">
          <div className="md:ml-10 ">
            <p className="text-2xl md:text-base tracking-normal font-sans font-bold justify-center">ZX7 SPEAKER</p>
            <p>
            <Link to={"/product/zx7-speaker"}> <button className="bg-transparent hover:bg-black hover:text-white text-black mt- md:mt-6 py-3 px-6 border border-black font-bold text-xs tracking-tight">SEE PRODUCT</button></Link>
            </p>
          </div>
      
          <img className="zx7-speaker" src={zx7} alt="r" />
        </div>
      </section>
    );
  };