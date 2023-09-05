import { PropsonClicks } from '../OnclickProps-pages/PropsonClicks';

import accessarybig from '../images/accessary-img3.png'
import { ImageGrid3form } from "../OnclickProps-pages/grid3form"

import { FeaturesInBox } from '../OnclickProps-pages/featuresInBox'
import theimage11big from '../images/theimage11big.jpg'
import twoHearphone from '../images/twoHearphone.jpg'
import accessary3With2earpics from '../images/accessary3With2earpics.jpg'

import { Accesary } from "../Accessary/accessary"
import { YouMayAlsoLikepage } from "../OnclickProps-pages/YouMayAlsoLikepage"
import FooterSection from "../FooterSection/footer"
import { BringingYouSection } from "../BringingYouSection/BringingYou"


export const ProductYx1Earphones = () =>{

return(<div>

<section className="pt-20 md:pt-38 ">
    <PropsonClicks Link={"/product/yx1-earphones"} image={accessarybig} goback={"Go Back"} subTitle= {"NEW PRODUCT"} title= {"YX1 WIRELESS EARPHONES"} description= {"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."} 
  amount={"$ 599"} secondButton={"ADD TO CART"}/>
</section>
<FeaturesInBox  FeaturesInBox1 = {"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."} 
FeaturesInBox2={"The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black. "}
number1={'2x'} words1={'Earphones unit'} number2={'6x'} words2={'Multi-size earplugs'} number3={'1x'} words3={' User manual'} number4={'1x'} words4={'USB-C charging cable'} number5={'1x'} words5={'Travel pouch'}/>

<ImageGrid3form img1={twoHearphone} img2={theimage11big} img3={accessary3With2earpics} /> 



<YouMayAlsoLikepage Link3={"/Product/zx9-speaker"} mayAlsoLikeProduct3={"ZX9 SPEAKER"} 
 Link1={"/product/xx99-mark-one-headphones"} mayAlsoLikeProduct1={"XX99 MARK I"}   Link2={"/product/xx59-headphones"} mayAlsoLikeProduct2={"XX59"} />
<Accesary />
<>
  <BringingYouSection />
</>

<section>
    <FooterSection />
</section>

</div>)

}