import { React } from "react";
import { Link } from "react-router-dom";
export const PropsBody = (Props)=>{


    return(

<div className="flex flex-wrap md:flex-no-wrap items-center justify-center md:justify-between ">
<div className="w-full md:w-1/2">
<Link to={Props.back} ><p className="pb-10 hover:text-red transition">{Props.goback}</p></Link>
  <img className="img-background border py-20 px-24 rounded-lg mb-10 md:mb-0" src={Props.image} alt="headphones" />
</div>
<div className="text-center md:text-left  w-full md:w-2/5">
<p className=' producttype mb-6'>{Props.subTitle}</p>
  <h1 className="text-3xl md:text-5xl font-semibold md:font-bold tracking-wider text-black leading-none mb-6">{Props.title}</h1>
  <p className="text-black text-sm not-italic md:font-medium leading-6 opacity-50 ">{Props.description}</p>
 
 <Link to={Props.Link}> <button className="py-3 px-8 rounded text-white border-none my-6 text-sm not-italic tracking-tight  hover:bg-orange-600">SEE PRODUCT</button></Link>
</div>
</div>
    )

}
