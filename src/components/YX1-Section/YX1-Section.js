import React from "react";
import yx1 from '../images/theimage11big.jpg'
import { Link } from "react-router-dom";
import './yx1-section.css'
export const YX1Section = () => {
    return (
        <section className="mt-0 md:mt-20 ">
        <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-between yx1" >
          <div>
            <img className="theimage11" src={yx1} alt="" />
          </div>
      
          <div className="border-2 img-background rounded-lg py-20 pl-6 md:py-20 md:pl-12 pr-28 sm:pr-60 mt-4 md:mt-0  border-none">
            <p className="text-base md:text-3xl tracking-tight font-bold">YX1 EARPHONES</p>
            <p>
             <Link to={"/product/yx1-earphones"}> <button className="bg-transparent hover:bg-black hover:text-white text-black mt-2 py-2 px-8 border border-black text-sm">SEE PRODUCT</button>
             </Link></p>
          </div>
        </div>
      </section>
    );
  };
  