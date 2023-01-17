import React from 'react' 
import ContainerItems from './ContainerItems';
import { useGlobalContext } from './context';
 
const Container = () => {
  const {clearItem,cart,total} = useGlobalContext();
  return ( 
    <div className="big-container">

     <div className='Items-container'>
      <h1>Items</h1>
      <div className="items">
        {
          cart.map((items)=>{
           return <ContainerItems key={items.id} {...items} />
          })
        }
      </div>  
      <button   className='btn clear-btn' onClick={clearItem}>clear all</button>
      <hr /> 
      <div className="footer">
        
         <h3>Total</h3>
         <h4>${total}</h4>
      </div>

      
     </div>
    </div>
  )
}

export default Container;
