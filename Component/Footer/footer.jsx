import React from 'react'
import './footer.css'
import Image from 'next/image'
import flag from '../../public/flag.jpg'
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import gpay from '../../public/gpay.png';
import mastercard from '../../public/mastercard.png';
import paypal from '../../public/paypal.png'
import amex from '../../public/amex.png'
import ipay from '../../public/ipay.png'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="uppersection">
        <div className="card1">
        <h2 className='foothead'>BE THE FIRST TO KNOW </h2>
        <p className='footcontent'>Sign up for updates from abc.</p>
        <input type="email" className='email' placeholder='Enter Your e-mail...' /> <span><button className='btn' type='button'>SUBSCRIBE</button></span>
        </div>
        <div className="card2">
          <ul className='card2'>
            <li className='cdhead'>CONTACT US</li>
             <li className='footcontent'>+44 22 133 5360</li>
             <li className='footcontent'>customercare@abc.com</li>

          </ul  >
          <ul className='card2'>
            <li className='cdhead'>CURRENCY</li>
            <Image className='flag'alt='imgflag' src={flag} height={35} width={40}></Image> <li className='usd' >  USD</li>
            <li className='footcontent'>Transactions will be completed in Euros and a currncy reference is available</li>
          </ul>
        </div>
        </div>
        <div className="lowersection">
          <ul className="cards">
            <li className='cdhead'>abc</li>
            <li className='footcontent'>About Us</li>
            <li className='footcontent'>Stories</li>
            <li className='footcontent'>Artisian</li>
            <li className='footcontent'>Boutiques</li>
            <li className='footcontent'>Contact Us</li>
            <li className='footcontent'>EU Compliances Docs</li>
          
          </ul>
          <ul className="cards">
            <li className='cdhead'>QUICK LINKS</li>
            <li className='footcontent'>Orders & Shipping</li>
            <li className='footcontent'>Join/Login as a Seller</li>
            <li className='footcontent'>Payment & Pricing</li>
            <li className='footcontent'>Return & Refunds</li>
            <li className='footcontent'>FAQs</li>
            <li className='footcontent'>Privacy Policy</li>
            <li className='footcontent'>Terms & Conditions</li>
          
          </ul>

          <div className="cards">
          <h2 className='foothead'>FOLLOW US </h2>
           <div ><AiFillInstagram className='social'/>  <BsLinkedin className='social' /></div>
           <h2 className="foothead accept">abc ACCEPTS</h2>
           <Image className='pay'alt='img' src={gpay} width={48} height={20} ></Image>
           <Image className='pay'alt='img' src={mastercard} width={48} height={20} ></Image>
           <Image className='pay' alt='img' src={paypal} width={48} height={20} ></Image>
           <Image className='pay' alt='img' src={amex} width={48} height={20} ></Image>
           <Image className='pay' alt='img' src={ipay} width={48} height={20} ></Image>
          </div>
          
        </div>
        <p className="footcontent copyright">copyright &#169; 2023 abc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
