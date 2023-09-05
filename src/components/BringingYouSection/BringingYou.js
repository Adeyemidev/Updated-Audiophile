
import React from 'react';
import './bringingYouSection.css'
import audio from '../images/pic.png'
export const BringingYouSection = () => {
    return (
        <section className="bringing flex flex-col-reverse md:flex-row justify-center md:justify-between gap-0 md:gap-40 ">
        <div className="  text-center md:text-left w-full md:w-1/2 mt-10 md:mt-28">
          <h1 className=" text-black text-base sm:text-5xl leading-8 sm:leading-10  tracking-tight md:tracking-wider not-italic font-bold mb-10 ">BRINGING YOU THE <span className="text-orange-600"> <br />BEST</span> AUDIO GEAR</h1>
          <span className="opacity-60 text-sm md:font-medium leading-6 ">Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers,
             and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience 
             a wide range of our products. Stop by our store to meet some of the 
            fantastic people who make Audiophile the best place to buy your portable audio equipment.</span>
        </div>
      
        <div className="w-full md:w-1/2 ">
          <img  src={audio} className="rounded-lg m-auto w-full audio"  alt="" />
        </div>
      </section>
      
    );
  };