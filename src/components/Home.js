
import {Header} from './Header-Section/header';
import { ZX9Section } from './zx9-section/zx9-section'
import  {ZX7Section} from './ZX7-Section/ZX7-Section';
import { YX1Section } from './YX1-Section/YX1-Section';
import { BringingYouSection } from './BringingYouSection/BringingYou';
import { Accesary } from './Accessary/accessary';
import accessaryimg1 from './images/accessary-img1.png'
import accessaryimg2  from './images/accessary-img2.png'
import accessaryimg3 from './images/accessary-img3.png'
import FooterSection from './FooterSection/footer';

export const Home = (props) => {


return (<div >
<Header  />
<Accesary image={accessaryimg1}   image2={accessaryimg2} image3={accessaryimg3}/>
<ZX9Section />
<ZX7Section />
<YX1Section />
<BringingYouSection />
<FooterSection />
    </div>
    );}