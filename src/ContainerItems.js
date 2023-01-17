import React from 'react' 
import { useGlobalContext } from './context';

 const ContainerItems = ({id,title,price,img,amount}) => {
  const {clearsingleitem,Another} = useGlobalContext();
  return (
    <div className='info-container'>

      <div className='info'>

      <div className="img">
      <img src={img} alt="images" />
      </div>


      <div className="basic-info">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      
      <button onClick={()=>clearsingleitem(id)}>remove</button>
      
      </div>

      </div>

      <div className="amount">
        <button onClick={()=>Another(id,'inc')}>+</button>
        <p>{amount}</p>
        <button onClick={()=>Another(id,'dec')}>-</button>
      </div>

      
    </div>
  )
}
export default ContainerItems;