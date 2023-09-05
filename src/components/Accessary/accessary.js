import React from 'react';
import forwardlogo from '../images/forwardlogo.png';
import accessaryimg1 from '../images/accessary-img1.png';
import accessaryimg2 from '../images/accessary-img2.png';
import accessaryimg3 from '../images/accessary-img3.png';

export const Accesary = (props) => {
  return (
    <div>
      <div className="grid grid-flow-row md:grid-flow-col place-items-center body gap-10 items-center ">
      <div>
          <div className=' -mb-20 relative '>
            <img style={{ margin: 'auto' }} src={accessaryimg1} alt="XX59" />
          </div>
          <div className="img-background pt-28 pb-4 px-28 md:px-26">
            <div className="items-center text-center aligns-center">
              <h2 className="text-lg not-italic font-bold tracking-wider mt-6">HEADPHONES</h2>
              <p className='flex justify-center items-center content-center gap-2 place-items-center'>
                <span>Shop</span> <span><img src={forwardlogo} alt='forwardlogo' /></span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=' -mb-20 relative '>
            <img style={{ margin: 'auto' }} src={accessaryimg2} alt="XX59" />
          </div>
          <div className="img-background pt-28 pb-4 px-28 md:px-26">
            <div className="items-center text-center aligns-center">
              <h2 className="text-lg not-italic font-bold tracking-wider mt-6">SPEAKERS</h2>
              <p className='flex justify-center items-center content-center gap-2 place-items-center'>
                <span>Shop</span> <span><img src={forwardlogo} alt='forwardlogo' /></span>
              </p>
            </div>
          </div>
        </div> 


         <div>
          <div className='-mb-20 relative '>
            <img style={{ margin: 'auto' }} src={accessaryimg3} alt="XX59" />
          </div>
          <div className="img-background pt-28 pb-4 px-28 md:px-26">
            <div className="items-center text-center aligns-center">
              <h2 className="text-lg not-italic font-bold tracking-wider mt-6">EARPHONES</h2>
              <p className='flex justify-center items-center content-center gap-2 place-items-center'>
                <span>Shop</span> <span><img  alt='forwardlogo' /></span>
              </p>
            </div>
          </div>
        </div>  
       
        </div>
    </div>
  );
};
