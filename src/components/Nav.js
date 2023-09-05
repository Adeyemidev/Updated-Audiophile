import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import combined from './images/Combined Shape.png';
import Weblogo from './images/Weblogo.png';
import Modal from '../components/modal'
import { useContext } from 'react';
import { AppContext} from '../App';

export const Nav = () => {
const {showModal} = useContext(AppContext)
const {setShowModal} = useContext(AppContext)



const toggleModal = ()=>{
    setShowModal(!showModal)
  }
  const toggleCart = ()=>{

  }


  return (
    <div className="relative">
      {showModal && <Modal />}
 
       <header className=" ">
        <nav className=" pb-4 md:pb-10 border-b border-slate-700" >
          <div className={styles.hamburger} onClick={toggleModal} >
            <div className={styles.tog}></div>
            <div className={styles.tog}></div>
            <div className={styles.tog}></div>
          
          </div>

          <Link to={'/'}><img className={styles.img1} src={Weblogo} alt="Weblogo" /></Link>
          <ul className={`gap-10 text-xs text-white not-italic font-bold leading-6 ${styles.navLinks}`}>
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/Headphones">HEADPHONES</Link></li>
            <img className={styles.img2} src={Weblogo} alt="Weblogo" />
            <li><Link to="/Speakers" >SPEAKERS</Link></li>
            <li><Link to="/Earphones">EARPHONES</Link></li>
          </ul>
       <div>

<div className='text-white border-none border-red-100 bg-red px-2' style={{borderRadius:'20px',textAlign: 'center' ,marginLeft:'15px' }}>1</div>
<img src={combined} onClick={toggleCart}  alt="Click" /> </div> </nav>
    
      </header>

    </div>
  );
};