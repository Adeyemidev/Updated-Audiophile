import  React  from "react"
import './headphones.css'
import { Accesary } from "../Accessary/accessary"
import { BringingYouSection } from "../BringingYouSection/BringingYou"
import { PropsHeader } from "../OtherSecHeader/OtherHeader.js"
import XX99MARKII from '../images/XX99IIlli.png'
import { PropsBody } from "../PropsBody/Propsbody"
import { PropsBody2 } from "../PropsBody2/Propsbody2"
import accassary1big from '../images/accessary1big.png'
import accessaryimg1 from '../images/accessary-img1.png'
import accessaryimg2  from '../images/accessary-img2.png'
import accessaryimg3 from '../images/accessary-img3.png'
import FooterSection from "../FooterSection/footer"


export const Headphones = ()=>{

return <div className="">




<PropsHeader sectionName = {"HAEDPHONES"}/>

<section className="body">


    <PropsBody Link={"/XX99MARK11"} subTitle= {"NEW PRODUCT"} title= {"XX99MARK II HEADPHONES"}image={XX99MARKII} description= {"The new XX99 Mark II headphones are the pinnacle of pristine audio. They redefine your premium headphones experience by reproducing the balanced depth and precision of studio-quality sound. "}/>
  
</section>
<section className="body">
    <PropsBody2 Link={"/product/xx99-mark-one-headphones"} title= {"XX99 MARK I HEADPHONES"}image={accassary1big} description= {"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."}/>
  
</section>

<section className="body">
<PropsBody  Link= {"/product/xx59-headphones"}title= {"XX59 HEADPHONES"}image={XX99MARKII} description= {"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable headset is a brilliant companion at home or on the move."}/>
  
</section>

<section  className="body">
  <Accesary  image1={accessaryimg1} image2={accessaryimg2} image3={accessaryimg3}/>
</section>

<section >
  <BringingYouSection />
</section>

<section>
    <FooterSection />
</section>

</div>
}