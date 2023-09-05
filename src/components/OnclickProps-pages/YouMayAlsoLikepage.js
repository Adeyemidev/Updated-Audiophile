import React from "react";
import { Link } from "react-router-dom";
import accessaryimg1 from "../images/accessary-img1.png"

import small1 from '../images/small1.png'
import small2 from '../images/small2.png'
import small3 from '../images/small2.png'

export const YouMayAlsoLikepage = (Props) => {
  return (
    <>
    <h1 className="text-2xl md:text-3xl mt-20 md:mt-0 text-center not-italic font-bold leading-9 tracking-widest mb-8">
        YOU MAY ALSO LIKE
        </h1>

<div className="grid md:grid-flow-col place-items-center body gap-10">

<div ><div className="img-background shadow-xl py-6 md:py-20 px-28 rounded-lg" ><img  src={small1} alt="XX99 MARK I"/></div>
<div className="items-center text-center aligns-center"><h2 className="text-2xl not-italic font-bold tracking-wider mt-6">{Props.mayAlsoLikeProduct1}</h2> 
<Link to={Props.Link1}><button className="py-3 px-8 rounded text-white border-none my-6 text-sm not-italic tracking-tight">SEE PRODUCT</button></Link></div>
</div>

<div ><div className="img-background shadow-xl  py-6 md:py-20 px-28 rounded-lg" ><img  src={small2} alt='XX59'/></div>
<div className="items-center text-center aligns-center"><h2 className="text-2xl not-italic font-bold tracking-wider mt-6">{Props.mayAlsoLikeProduct2}</h2> 
<Link to={Props.Link2}><button className="  py-3 px-8 rounded text-white border-none my-6 text-sm not-italic tracking-tight">SEE PRODUCT</button></Link></div>
</div>


<div ><div className="img-background shadow-xl py-6 md:py-20 px-28 rounded-lg" ><img  src={small1} alt="Z9 SPEAKER"/></div>
<div className="items-center text-center aligns-center"><h2 className="text-2xl not-italic font-bold tracking-wider mt-6">{Props.mayAlsoLikeProduct3}</h2> 
<Link to={Props.Link3}><button className="  py-3 px-8 rounded text-white border-none my-6 text-sm not-italic tracking-tight">SEE PRODUCT</button></Link></div>

</div>

    </div>
    </>);
    }