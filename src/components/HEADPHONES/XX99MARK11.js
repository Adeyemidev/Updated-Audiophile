import  React  from "react"
import { Accesary } from "../Accessary/accessary"
import XX99MARKII from '../images/XX99IIlli.png'
import { PropsonClicks } from "../OnclickProps-pages/PropsonClicks"
import { FeaturesInBox } from "../OnclickProps-pages/featuresInBox"
import some from '../images/some.png'
import Bitmap222 from '../images/Bitmap222.png'
import theGuyWitheHeadphon from '../images/theGuywithHeadphone.png'
import { YouMayAlsoLikepage } from "../OnclickProps-pages/YouMayAlsoLikepage"
import FooterSection from "../FooterSection/footer"
import { BringingYouSection } from "../BringingYouSection/BringingYou"
import {ImageGrid3form } from "../OnclickProps-pages/grid3form"

export const XX99MARKIIOnClick = ()=>{

return <div>
<section className="pt-20 md:pt-38 ">
    <PropsonClicks Link= {"/XX99MARK11"} goback={"Go Back"} subTitle= {"NEW PRODUCT"} title= {"XX99MARK II HEADPHONES"}image={XX99MARKII} description= {"The new XX99 Mark II headphones are the pinnacle of pristine audio. They redefine your premium headphones experience by reproducing the balanced depth and precision of studio-quality sound. "} 
 amount={"$ 2,999"}  secondButton={"ADD TO CART"}/>
  
</section>

<FeaturesInBox number1={"1x"} words1={"Headphones unit"} number2={"2x"} words2={"Replacement earcups"} number3={"1x"}words3={"User manual"} number4={"1x"} words4={"3.5mm 5m audio cable"} number5={"1x"} words5={"Travel bag"}  FeaturesInBox1={" Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."}
FeaturesInBox2={" The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic."}/>

<ImageGrid3form img1={theGuyWitheHeadphon} img2={some} img3={Bitmap222} />
 <YouMayAlsoLikepage   Link2={"/product/xx59-headphones"} mayAlsoLikeProduct2={"XX59"}  Link1={"/product/xx99-mark-one-headphones"} mayAlsoLikeProduct1={"XX99 MARK I"} 
Link3={"/Product/zx9-speaker"} mayAlsoLikeProduct3={"ZX9 SPEAKER"}/>
<Accesary />
<BringingYouSection />
<FooterSection />


</div>
};
