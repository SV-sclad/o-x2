import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Order from './Order';

const showOrders = (props) =>{
 let summa = 0;
   props.orders.forEach(elements => summa += +elements.price)
  
  
    return(
      <div>
       { props.orders.map(elements =>(<Order onDelete={props.onDelete} key={elements.id} item={elements} />)) }
       <p>Summa {summa}$ </p>
      </div>

    )
    
}

const showNothing = () =>{
  return(<div>
    <h2>Not products</h2>
  </div>)
}


export default function Header(props) {

  let[cartOpen, setCartOpen] = useState(false)
  
  
  
  return (  
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>About</li>
                <li>Contacts</li>
                <li>Work space</li>
                <FaShoppingCart size="40" onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
                  {cartOpen && (
                    <div className='shop-cart'>
                         {
                             props.orders.lenght > 0 ?
                             showNothing():showOrders(props)
                             
                         }
                          
                    </div>
                  )}

            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  );
}
