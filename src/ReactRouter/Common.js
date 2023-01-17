import React from 'react' 
import Nav from './Navbar';
import { Outlet } from 'react-router-dom';

const Common = () => {
  return (  
    <>
    <Nav/>  
    <Outlet/>
    </>
  )
}

export default Common