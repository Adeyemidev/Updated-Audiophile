import  React  from "react"
import { Accesary } from "../Accessary/accessary"
import { PropsonClicks } from "../OnclickProps-pages/PropsonClicks"
import { FeaturesInBox } from '../OnclickProps-pages/featuresInBox'
import speakerzx9 from '../images/image-speaker-zx9.png'
import imagegallery1 from '../images/image-gallery-1.jpg'
import imagegallery2 from '../images/image-gallery-2.jpg'
import imagegallery3 from '../images/image-gallery-3.jpg'
import { YouMayAlsoLikepage } from "../OnclickProps-pages/YouMayAlsoLikepage"
import FooterSection from "../FooterSection/footer"
import { BringingYouSection } from "../BringingYouSection/BringingYou"
import { ImageGrid3form } from "../OnclickProps-pages/grid3form"


export const ProductZx9Speaker = ()=>{

return <div>
<section className="pt-20 md:pt-38" >
    <PropsonClicks Link= {"/Speakers"} image={speakerzx9} goback={"Go Back"} subTitle= {"NEW PRODUCT"} title= {"ZX9 SPEAKER"} description= {"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."} 
  amount={"$ 4,500"} secondButton={"ADD TO CART"}/>
</section>

<FeaturesInBox FeaturesInBox1 = {"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."} 
FeaturesInBox2={"Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."}
number1={'2x'} words1={'Speaker unit'} number2={'2x'} words2={'Speaker cloth panel'} number3={'1x'} words3={' User manual'} number4={'1x'} words4={'3.5mm 7.5mm audio cable'} number5={'1x'} words5={'10m optical cable'}
/>

 <ImageGrid3form img1={imagegallery1} img2={imagegallery2} img3={imagegallery3} /> 


 <YouMayAlsoLikepage Link1={"/product/zx7-speaker"} mayAlsoLikeProduct1={"ZX7 SPEAKER"} 
 Link2={"/product/xx59-headphones"} mayAlsoLikeProduct2={"XX99 MARK I"}    Link3={"/product/zx7-speaker"} mayAlsoLikeProduct3={"XX59"}/>
<Accesary />

<BringingYouSection />

<FooterSection />


</div>
};