import React from 'react'
import './container2.css'
import { PiHeartThin } from "react-icons/pi";
import Image from 'next/image';
import bag from '../../public/bag.jpg'
import toy from '../../public/toy.jpg'
import cover from '../../public/cover.jpg'
import cap from '../../public/cap.jpg'
import purse from '../../public/purse.jpg'
import purse2  from '../../public/purse2.jpg'
import clut from '../../public/clut.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
const Container2 = () => {
  return (
    <div>

      <div className="container2">
        
        <div className="card">
        <Image src={bag} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={toy} alt='img' className="img "  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={cover} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={cap} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={purse} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={purse2} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={clut} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={p3} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>
        <div className="card">
        <Image src={p4} alt='img' className="img"  width={260} height={280}></Image>
        <h2 className='name'>PPXOC MILKYWAY DRESS IN...</h2>
        <p className="info"><a href="#" className='sign'>sign in</a>  or Create an account to see pricing</p><span className="heart"><PiHeartThin/></span>
        </div>



      </div>
     

    </div>
  )
}

export default Container2
