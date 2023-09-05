
import  React  from "react"
import { Accesary } from "./Accessary/accessary"
import { BringingYouSection } from "./BringingYouSection/BringingYou"
import { PropsHeader } from "./OtherSecHeader/OtherHeader.js"
import { PropsBody } from "./PropsBody/Propsbody"
import { PropsBody2 } from "./PropsBody2/Propsbody2"
import zx9 from './images/image-speaker-zx9.png'
import zx7 from './images/zx71.jfif'

import accessaryimg1 from './images/accessary-img1.png'
import accessaryimg2  from './images/accessary-img2.png'
import accessaryimg3 from './images/accessary-img3.png'
import FooterSection from './FooterSection/footer'

export const Speakers = ()=>{

    return <div>

<PropsHeader sectionName = {"SPEAKER"} />

<section className="body">
<PropsBody subTitle= {"NEW PRODUCT"} title= {"ZX9 SPEAKER"}image={zx9} description= {"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."}
Link ={"/Product/zx9-speaker"}/>
  
</section>

<section className="body">
    <PropsBody2 Link={'/product/zx7-speaker'}title= {"ZX7 SPEAKER"}image={zx7} description= {"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}/>
  
</section>

<section  className="body">
  <Accesary  image1={accessaryimg1} image2={accessaryimg2} image3={accessaryimg3}/>
</section>

<BringingYouSection />

<FooterSection />
    </div>}

