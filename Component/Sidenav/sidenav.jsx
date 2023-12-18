import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import './sidenav.css'
const Sidenav = () => {
  return (
    <div>
      <div className="sideMenu">
        <div className="customize">
     <input type='checkbox' className='checkbox' /><span className='custom'>CUSTOMIZBLE</span></div>

     <div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>IDEAL FOR <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div>
     <div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>OCCASION <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div><div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>WORK <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div><div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>FABRIC <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div><div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>SEGMENT <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div><div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>SUITABLE FOR <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div><div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>RAW MATERIALS <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div><div className="sidemenuItem">
      <div className="sideItem">
      <h2 className='heading'>PATTERN <span className='down'><FaChevronDown/></span></h2>
      </div>
      <div className="all"><p>All</p></div>
     </div>
     </div>

 </div>
  )
}

export default Sidenav
