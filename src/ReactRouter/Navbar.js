import React from 'react' 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <section className='nav'> 
    <NavLink to='/' className={({isActive})=>(isActive?"link active":'link')}>Home</NavLink>
    <NavLink to='/About' className={({isActive})=>(isActive?"link active":'link')}>About</NavLink>
    <NavLink to='/Products' className={({isActive})=>(isActive?"link active":'link')}>Products</NavLink>
    </section >
  )
}

export default Navbar