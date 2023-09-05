

import React from 'react';

export const ImageGrid3form = (Props) => {
  return (
    <section className="grid  md:grid-flow-col place-items-center gap-4 body">
    <div className="row-span-2 "> <img className='rounded-lg' src={Props.img1} alt=""/></div>
    <div className="row-span-2"><img className='rounded-lg' src={Props.img2} alt=""/></div>
    <div className="row-span-4 "><img className='rounded-lg'  src={Props.img3} alt=""/></div>
    </section> 
    
  );
};

export default ImageGrid3form;
