import React ,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from'./Components/programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'


const App = () => {
 
  const [playVideo,setPlayVideo] =useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our programs' Title='What We Offers'/>
      <Programs/>
      <About setPlayVideo={setPlayVideo}/>
      <Title subTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' Title='What Student Says'/>
      <Testimonial/>
      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <ContactUs/>
      <Footer/>
      </div>
      <Videoplayer setPlayVideo={setPlayVideo} playVideo={playVideo}/>
      
    </div>
  )
}

export default App
