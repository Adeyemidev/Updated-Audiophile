
import React from "react"
export const CartProps = (Props)=>{

return( 
<div className=" flex justify-between px-10 align-canter items-center pb-10">

<div className="grid grid-flow-col place-items-center gap-2 ">
    <div className="row-span-4 "> <img className='rounded-lg img-background p-3 ' src={Props.another} alt="headphones" /></div>
    <div className="row-span-2"><span className="text-black text-sm not-italic md:font-medium leading-6 opacity-60 font-normal ">{Props.goodsName}</span> </div>
    <div className="row-span-2 "><span className="text-lg font-bold tracking-wider mt-8">{Props.amount}</span></div>
  </div>


 <div> 
     <button className=" py-3 px-2 md:px-4 bg-gray-100 hover:bg-gray-200 hover:duration-0" onClick={Props.minusClick}>-</button>
      <button className=" py-3 px-2 md:px-4 bg-gray-100 ">{Props.handleClick}</button>
      <button className=" py-3 py-3 px-2 md:px-4 bg-gray-100 hover:bg-gray-200" onClick={Props.addClick}>+</button>
  </div>

</div>
);}