import  React  from "react"
import { Accesary } from "../Accessary/accessary"
import { PropsonClicks } from "../OnclickProps-pages/PropsonClicks"
import { FeaturesInBox } from "../OnclickProps-pages/featuresInBox"
import grid1 from '../images/grid1.jpeg'
import grid2 from '../images/grid2.jpeg'
import grid3 from '../images/grid3.jpeg'

import accessary1big from '../images/accessary1big.png'

import { YouMayAlsoLikepage } from "../OnclickProps-pages/YouMayAlsoLikepage"
import FooterSection from "../FooterSection/footer"
import { BringingYouSection } from "../BringingYouSection/BringingYou"
import {ImageGrid3form } from "../OnclickProps-pages/grid3form"

export const XX99MARK1OnClick = () => {

return <div>
<section className="pt-20 md:pt-38">
    <PropsonClicks Link= {"/Headphones"} goback={"Go Back"}  title= {"XX99 MARK I HEADPHONES"}image={accessary1big} description= {"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."} 
 amount={"$ 1,750"}  secondButton={"ADD TO CART"}/>
  
</section>

<FeaturesInBox  number1={"1x"} words1={"Headphones unit"} number2={"2x"} words2={"Replacement earcups"} number3={"1x"}words3={"User manual"} number4={"1x"} words4={"3.5mm 5m audio cable"} 
 FeaturesInBox1={" As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz"}
FeaturesInBox2={"From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."}/>

<ImageGrid3form img1={grid1} img2={grid2} img3={grid3} />
 <YouMayAlsoLikepage Link1={"/XX99MARK11"} mayAlsoLikeProduct1={"XX99 MARK II"}  Link2={"/product/xx59-headphones"} mayAlsoLikeProduct2={"XX59"}
Link3={"/Product/zx9-speaker"} mayAlsoLikeProduct3={"ZX9 SPEAKER"}   />
<Accesary />
<BringingYouSection />
<FooterSection />


</div>
};

