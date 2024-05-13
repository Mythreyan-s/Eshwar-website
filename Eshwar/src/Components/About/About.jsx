import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayVideo}) => {
  
  return (
    <div className='About'>
       <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>
         {setPlayVideo(true)}
        } />
       </div>
       <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tommorow's Leader Today</h2>
         <p>Embark on a transformative educational journey with
            our university's comprehensive education programs.Our 
            cutting-edge curriculum is designed to empower students
            with the knowledge,skills, and experiences needed to excel
            in the dynamic field of education.
         </p>
         <p>With a focus on innovation, hands-on learning, and 
            personalized mentorship, our program prepare aspiring
            educators to make a meaningful impact in classroom,
            schools, and communities.
         </p>
         <p>Whether you aspire to become a teacher, administator,
            counselor, or eductional leader, our diverse range of
            programs offers the perfect pathway to achieve your 
            goals and unlock your full potentioal in shaping the future 
            of education.
         </p>
       </div>
    </div>
  )
}

export default About
