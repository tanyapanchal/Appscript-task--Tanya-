import React from 'react'
import './section1.css'
import { LiaLessThanSolid } from "react-icons/lia";


const Section1 = () => {
  return (
    <div>
      <div className="section1">
        <h2 className='filter'>FILTER </h2>
         <a href="#" className='hidefilter'><LiaLessThanSolid /> HIDE FILTER</a>
        <select name="" className='sort' >
         <option className='choose' >   RECOMMENDED </option> 
         <option className='choose' >NEWEST FIRST</option>
         <option className='choose' >POPULAR</option>
         <option className='choose'>PRICE : HIGH TO LOW</option>
         <option className='choose'>PRICE : LOW TO HIGH</option></select>
      </div>

    </div>
  )
}

export default Section1
