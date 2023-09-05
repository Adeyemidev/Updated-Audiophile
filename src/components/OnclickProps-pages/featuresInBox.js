import React from "react";

export const FeaturesInBox = (Props) => {
  return (
    <>
     
<section className="body">
<div className="md:flex  justify-between not-italic tracking-wide leading-6">
    <div className="w-full md:w-1/2  "> 
    <h1 className=" text-2xl md:text-3xl not-italic font-bold leading-9 tracking-widest mb-4 md:mb-8">FEATURES</h1>
      <p className="text-black text-sm not-italic md:font-medium leading-6 opacity-60 font-normal">
       {Props.FeaturesInBox1}
      </p><br />
      <p className="text-black text-sm not-italic md:font-medium leading-6 opacity-60 font-normal">
       {Props.FeaturesInBox2}
      </p></div>
    <div className="w-full md:w-1/3 my-16 md:mt-0"><h1 className="text-2xl md:text-3xl not-italic font-bold leading-9 tracking-widest mb-4 md:mb-8">IN THE BOX</h1>
    
    <p><span className="text-red pr-3 ">{Props.number1}</span> <span className="opacity-60 font-normal">{Props.words1}</span> </p>
    <p > <span className="text-red pr-3">{Props.number2}</span> <span className="opacity-60 font-normal">{Props.words2}</span></p>
    <p><span className="text-red pr-3">{Props.number3}</span> <span className="opacity-60 font-normal">{Props.words3}</span></p>
    <p><span className="text-red pr-3">{Props.number4}</span> <span className="opacity-60 font-normal">{Props.words4}</span></p>
    <p><span className="text-red pr-3">{Props.number5}</span> <span className="opacity-60 font-normal"> {Props.words5}</span></p>
    </div>
</div>
</section>


    </>
  );
};
