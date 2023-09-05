import  React  from "react"
import { BringingYouSection } from "./BringingYouSection/BringingYou"
import { PropsHeader } from "./OtherSecHeader/OtherHeader.js"
import { PropsBody } from "./PropsBody/Propsbody"
import accessaryimg3 from './images/accessary-img3.png'
import {Accesary}  from "./Accessary/accessary"
import FooterSection from "./FooterSection/footer"
export const Earphones = ()=>{
return <div>

<PropsHeader sectionName = {"EARPHONES"}/>

<section className="body">
<PropsBody Link={'/product/yx1-earphones'} subTitle= {"NEW PRODUCT"} title= {"YX1 WIRELESS EARPHONES"}image={accessaryimg3} description= {"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature"}/>

</section>
<Accesary />
<BringingYouSection />
<FooterSection />
</div>}