import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonial = () => {
 const slider = useRef();
 let tx =  0;

const SlideForward= ()=>{
  if(tx>-50){
    tx=tx-25;
  }
  slider.current.style.transform=`translateX(${tx}%)`;
}
const SlideBackward = ()=>{
    if(tx<0){
        tx=tx+25;
      }
      slider.current.style.transform=`translateX(${tx}%)`;
}
  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={SlideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={SlideBackward}/>
      <div className="slider">
         <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Mythreyan</h3>
                        <span>Sri Eshwar,Coimbatore</span>
                    </div>
                    </div>
                    <div>
                        <p>Choosing my degree at Eshwar was one of the best
                            decision I have ever made.The supportive community,
                            state-of-the-art facilities, and commitment to 
                            academic excellence have truly exceeded my expectation.
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Breeze</h3>
                        <span>Sri Eshwar,Coimbatore</span>
                    </div>
                </div> 
                    <div>
                        <p>Selecting my major at Eshwar was a pinnacle choice.
                             The nurturing environment, top-notch amenities, 
                            and dedication to scholarly prowess surpassed all anticipation.
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Manoj</h3>
                        <span>Sri Eshwar,Coimbatore</span>
                    </div>
                </div>
                    <div>
                        <p>Opting for my course at Eshwar remains unmatched. 
                            The encouraging atmosphere, cutting-edge resources,
                             and relentless pursuit of academic brilliance far 
                             surpassed my hopes.
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Bala</h3>
                        <span>Sri Eshwar,Coimbatore</span>
                    </div>
                </div>    
                    <div>
                        <p>Choosing my degree at Eshwar was one of the best
                            decision I have ever made.The supportive community,
                            state-of-the-art facilities, and commitment to 
                            academic excellence have truly exceeded my expectation.
                        </p>
                    </div>
                </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonial
