import React,{useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/ehwar.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [navbar,setNavbar] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY>50 ? setNavbar(true) :setNavbar(false);
  })
},[])

  const[hidemenu,setHidemenu] =useState(false);
  const toggle= ()=>{
        hidemenu ? setHidemenu(false) :setHidemenu(true);
  }

  return (
   <nav className={`container ${navbar ? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo' />
    <ul className={hidemenu?'' : 'hide'} >
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='About' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-230} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonal</Link></li>
        <li><Link Link to='Contact' smooth={true} offset={-200} duration={500} className='btn'>Contact Us</Link></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggle}/>
   </nav>
  )
}

export default Navbar
