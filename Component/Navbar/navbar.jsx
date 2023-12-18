import React from 'react'
import './navbar.css'
import { CiSearch } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import { IoBagRemoveOutline } from "react-icons/io5";
import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';

import { BsPerson } from "react-icons/bs";
// import Container from '../Container/container';
const Navbar = () => {
  return (
    
    
    <div className='nav'>

        
        
        <div className="nav1">
            <Image className='logoimg' src={logo} height={50} width={60} ></Image>
            
           <h1 className='logo'> LOGO</h1>
            <div className="icons">
                <div className="icon"><CiSearch /></div>
                <div className="icon"><PiHeartThin /></div>
                <div className="icon"><IoBagRemoveOutline/></div>
                <div className="icon"><BsPerson /></div>
            </div>
        
          <select className='lang'>
                <option className='eng'>ENG</option>
            </select>  
        </div>

        

        <div className="desktopMenu">
           <Link className="menuListItem" href='/'>SHOP</Link>
           <Link className="menuListItem" href='/'>SKILLS</Link>
           <Link className="menuListItem" href='/'>STORIES</Link>
           <Link className="menuListItem" href='/'>ABOUT</Link>
           <Link className="menuListItem" href='/'>CONTACT US </Link>
        </div>

    
    
    </div>
    
  
  )
}

export default Navbar
