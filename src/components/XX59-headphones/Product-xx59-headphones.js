import { PropsonClicks } from '../OnclickProps-pages/PropsonClicks';

import XX599 from '../images/XX599.jpg'
import { ImageGrid3form } from "../OnclickProps-pages/grid3form"
import { FeaturesInBox } from '../OnclickProps-pages/featuresInBox'
import closedheadphone from '../images/closedheadphone.jpg'
import girlwithheadphone from '../images/girlwithheadphone.jpg'
import headphoneonhand from '../images/headphoneonhand.jpg'
import { Accesary } from "../Accessary/accessary"
import { YouMayAlsoLikepage } from "../OnclickProps-pages/YouMayAlsoLikepage"
import FooterSection from "../FooterSection/footer"
import { BringingYouSection } from "../BringingYouSection/BringingYou"


export const ProductXX59headphone = () =>{

return(<div>

<section className="pt-20 md:pt-38">
    <PropsonClicks  image={XX599} goback={"Go Back"}  title= {"XX59 HEADPHONES"} description= {"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."} 
  amount={"$ 899 "} secondButton={"ADD TO CART"}/>
  
</section>
<FeaturesInBox  number1={"1x"} words1={"Headphones unit"} number2={"2x"} words2={"Replacement earcups"} number3={"1x"}words3={"User manual"} number4={"1x"} words4={"3.5mm 5m audio cable"}
 FeaturesInBox1 = {"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."} 
FeaturesInBox2={"More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C. "}/>

<ImageGrid3form img1={girlwithheadphone} img2={closedheadphone} img3={headphoneonhand} /> 



<YouMayAlsoLikepage Link1={"/XX99MARK11"} mayAlsoLikeProduct1={"XX99 MARK II"}  Link={"/product/xx99-mark-one-headphones"} mayAlsoLikeProduct2={"XX99 MARK I"} 
Link3={"/Product/zx9-speaker"} mayAlsoLikeProduct3={"ZX9 SPEAKER"} 
/>
<Accesary />
<>
  <BringingYouSection />
</>

<section>
    <FooterSection />
</section>

</div>)

}