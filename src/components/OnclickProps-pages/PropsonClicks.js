import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Notify from '../Notification/notify';


export const PropsonClicks = (Props) => {
 const [handleClick, setHandleClick] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const minusClick = () => {
   setHandleClick(Props.handleClick - 1);
   };

   const addClick = () => {
    setHandleClick(handleClick + 1);
  };

  const handleTwoFunction = () => {
    addClick();
    setShowAlert(true); // Show the Notify component when the button is clicked
  };

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      },1000);

      return () => clearTimeout(timeout);
    }
  }, [showAlert]);


  return ( 
    <div className="flex flex-wrap md:flex-no-wrap items-center justify-center md:justify-between body">
      <div className="w-full md:w-1/2">
      {showAlert && <Notify productName={"X"} />} {/* Conditionally render Notify based on showAlert */}
 
        <Link to={Props.Link}>
          <p className="pb-10 hover:text-red transition">{Props.goback}</p>
        </Link>
     
        <img
          className="img-background border py-20 px-24 rounded-lg mb-10 md:mb-0 place-items-center m-auto"
          src={Props.image}
          alt="headphones"
        />
      </div>
      <div className="text-left w-full md:w-2/5">
        <p className="producttype mb-6">{Props.subTitle}</p>
        <h1 className="text-3xl md:text-5xl not-italic leading-7 font-bold tracking-wider text-black md:leading-none mb-6">
          {Props.title}
        </h1>
        <p className="text-black text-sm not-italic md:font-medium leading-6 opacity-60 font-normal ">
          {Props.description}
        </p>
        <p className="text-lg font-bold tracking-wider mt-8">{Props.amount}</p>
        <div className="mt-4 ">
          <button className="py-3 px-4 md:px-6 bg-gray-100 hover:bg-gray-200 hover:duration-0" onClick={minusClick}>
            -
          </button>
          <button className="py-3 px-6 bg-gray-100 ">{handleClick}</button>
          <button className="py-3 py-3 px-4 md:px-6 bg-gray-100 hover:bg-gray-200" onClick={addClick}>
            +
          </button>
          <button
            onClick={handleTwoFunction}
            className="ml-4 py-3 px-6 md:px-6 rounded text-white border-none my-6 text-xs md:text-sm not-italic tracking-tight"
          >
            ADD PRODUCT
          </button>
        </div>
       
           </div>
    </div>
  );
};
