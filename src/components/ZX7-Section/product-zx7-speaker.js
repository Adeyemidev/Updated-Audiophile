import { PropsonClicks } from '../OnclickProps-pages/PropsonClicks';
import zx71 from '../images/zx71.jfif'
import { ImageGrid3form } from "../OnclickProps-pages/grid3form"
import { FeaturesInBox } from '../OnclickProps-pages/featuresInBox'
import speakerbas from '../images/1.png'
import zx7speaker from '../images/3.png'
import { Accesary } from "../Accessary/accessary"

import { YouMayAlsoLikepage } from "../OnclickProps-pages/YouMayAlsoLikepage"
import FooterSection from "../FooterSection/footer"
import { BringingYouSection } from "../BringingYouSection/BringingYou"


export const ProductZx7Speaker = () =>{

return(<div>

<section className="pt-20">
    <PropsonClicks Link={"/product/zx7-speaker"} image={zx71} goback={"Go Back"}  title= {"ZX7 SPEAKER"} description= {"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."} 
  amount={"$ 3,500"} secondButton={"ADD TO CART"}/>
  
</section>
<FeaturesInBox FeaturesInBox1 = {"Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."} 
FeaturesInBox2={"The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience. "}
number1={'2x'} words1={'Speaker unit'} number2={'2x'} words2={'Speaker cloth panel'} number3={'1x'} words3={' User manual'} number4={'1x'} words4={'3.5mm 7.5mm audio cable'} number5={'1x'} words5={'7.5m optical cable'}
/>

<ImageGrid3form img1={speakerbas} img2={speakerbas} img3={zx7speaker} /> 



<YouMayAlsoLikepage Link1={"/Product/zx9-speaker"} mayAlsoLikeProduct1={"ZX9 SPEAKER"} 
 Link2={"/product/xx99-mark-one-headphones"} mayAlsoLikeProduct2={"XX99 MARK I"}   Link3={"/product/xx59-headphones"} mayAlsoLikeProduct3={"XX59"} />
<Accesary />
<>
  <BringingYouSection />
</>

<section>
    <FooterSection />
</section>

</div>)

}