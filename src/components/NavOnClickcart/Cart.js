import React, { useState } from 'react';
import another from '../images/small1.png'
import '../NavOnClickcart/Cart.module.css'
import { CartProps } from './CartProps';
export const Cart = ()=> {

    const [handleClick, setHandleClick] = useState(1);

    const minusClick = () => { 
      setHandleClick(handleClick - 1);
    }
  
    const addClick = () => { 
      setHandleClick(handleClick + 1);
    }
  
    return<div style={{position:'relative', zIndex: '11', backgroundColor: 'red'}} className=" pt-20 z-40 relative text-center">

<section className="bg-white mx-96 rounded-lg">

<div className="flex justify-between p-10">
    <h2 className='text-lg font-bold tracking-widest'>{"CART (3)"}</h2>
    <span className='underline opacity-50'>{"Remove all"}</span>
</div>

<CartProps goodsName={"XX99 MK II"} amount={"$2. 999"} another={another} minusClick={minusClick} handleClick={handleClick} addClick={addClick} />
<Cart  PropsgoodsName={"XX59"} amount={"$899"} another={another} minusClick={minusClick} handleClick={handleClick} addClick={addClick} />
<CartProps goodsName={"YX1"} amount={"$599"}  another={another} minusClick={minusClick} handleClick={handleClick} addClick={addClick} />


<button className='text-xs text-white m-auto py-4 px-20 bg-yellow  font-bold tracking-tight'>CHECKOUT</button>



</section>


    </div>
}
export default Cart;