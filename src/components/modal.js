import React from 'react';
import './modal.css'
import forwardlogo from './images/forwardlogo.png';
import accessaryimg1 from './images/accessary-img1.png';
import accessaryimg2 from './images/accessary-img2.png';
import accessaryimg3 from './images/accessary-img3.png'
import { Link } from 'react-router-dom';

export const Modal = () => {
  return (
    <div className='modal mt-20'>
      <div className="grid grid-flow-row md:grid-flow-col place-items-center gap-4 ">
      <Link to={'/Headphones'}>
          <div className=' -mb-14 relative '>
            <img style={{ margin: 'auto', height: '100px',  }} src={accessaryimg1} alt="XX59" />
         </div>
          <div className="img-background pt-16 pb-4 px-28">
            <div className="items-center text-center aligns-center">
              <h2 className="text-lg not-italic font-bold tracking-wider mt-6">HEADPHONES</h2>
              <p className='flex justify-center items-center content-center gap-2 place-items-center'>
                <span>Shop</span> <span><img src={forwardlogo} alt='forwardlogo' /></span>
              </p>
            </div>
          </div>
        </Link>
        <Link to={'/Speakers'}>
          <div className=' -mb-14 relative '>
            <img style={{ margin: 'auto',  height: '100px', }} src={accessaryimg2} alt="XX59" />
          </div>
          <div className="img-background pt-16 pb-4 px-32">
            <div className="items-center text-center aligns-center">
              <h2 className="text-lg not-italic font-bold tracking-wider mt-6">SPEAKERS</h2>
              <p className='flex justify-center items-center content-center gap-2 place-items-center'>
                <span>Shop</span> <span><img src={forwardlogo} alt='forwardlogo' /></span>
              </p>
            </div>
          </div>
        </Link>


        <Link to={'/Earphones'} className='pb-10'>
          <div className='-mb-14 relative '>
            <img style={{ margin: 'auto', height: "100px" }} src={accessaryimg3} alt="XX59" />
          </div>
          <div className="img-background pt-16 pb-4 px-28 ">
            <div className="items-center text-center aligns-center">
              <h2 className="text-lg not-italic font-bold tracking-wider mt-6">EARPHONES</h2>
              <p className='flex justify-center items-center content-center gap-2 place-items-center'>
                <span>Shop</span> <span><img src={forwardlogo} alt='forwardlogo' /></span>
              </p>
            </div>
          </div>
        </Link>

       
        
        </div>
    </div>
  );
};
export default Modal;