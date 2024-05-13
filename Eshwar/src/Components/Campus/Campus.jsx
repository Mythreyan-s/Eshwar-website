import React, { useState } from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import gallery_5 from '../../assets/gallery-5.png'
import gallery_6 from '../../assets/gallery-6.jpeg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {

   const [img,setImg]= useState(false);
   const show =()=>{
       img? setImg(false):setImg(true);
   }

  return (
    <div className='campus'>
        <div className='gallery'>
           <img src={gallery_1} alt="" />
           <img src={gallery_2} alt="" />
           <img src={gallery_3} alt="" />
        </div>
        <div className={`gallery ${img? '' : 'hidden'}`}>
        <img src={gallery_4} alt="" />
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
        </div>
        <button className='btn dark-btn' onClick={show}>
          See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
