
import React from "react"
export const PropsHeader = (props) =>{

return(
   
<section className="bg-black">

<div className="text-center text-white text-3xl  md:text-5xl leading-none tracking-wider pt-28 md:pt-48 pb-9 md:pb-28  font-semibold">{props.sectionName}</div>
</section>
)
}