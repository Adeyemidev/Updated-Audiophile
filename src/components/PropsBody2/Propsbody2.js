import { React } from "react";
import { Link } from "react-router-dom";
export const PropsBody2 = (Props)=>{

    return(

<div className="flex flex-wrap md:flex-no-wrap items-center justify-center md:justify-between ">
<div className="text-center md:text-left  w-full md:w-2/5">
<p className=' producttype'>{Props.subTitle}</p>
  <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-black leading-none mb-6">{Props.title}</h1>
  <p className="text-black text-sm not-italic md:font-medium leading-6 opacity-50 ">{Props.description}</p>
 <Link to={Props.Link}> <button className="py-3 px-8 rounded text-white border-none my-6 text-sm not-italic tracking-tight hover:bg-black">SEE PRODUCT</button></Link>
</div>
<div className="w-full md:w-1/2">
  <img className="img-background border py-20  px-24 rounded-lg mb-10 md:mb-0 m-auto" src={Props.image}  alt="headphones" />
</div>
</div>
    )

}
