'use client'

import { useState } from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { CiInstagram, CiYoutube, CiFacebook  } from "react-icons/ci";
import { PiBuilding, PiMailbox,  PiPhoneCall, PiTiktokLogoThin  } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { SlBadge, SlLocationPin } from "react-icons/sl";
import { CiCoffeeBean } from "react-icons/ci";
import { TbCoffee } from "react-icons/tb";
import { SiCoffeescript } from "react-icons/si";
import Link from "next/link";
import Scroll from "./components/Scroll";
import SignUP from "./signUp/page";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  };
  const toggleNavbar = () => {
    setClicked(!clicked)
  }
  console.log(isOpen)
  return (
    <>
    <Scroll />
    <header>
    
    <Image className="logo" alt="logo" src="/images/LOGO.png" width={40} height={40} />
    <div className="title-container">
      <h1 className="title-main"><span>BZN<sup>M</sup> </span> School of Barista And Baking</h1>
    </div>
    <button className="navbar-icon" onClick={toggleMenu}><IoMdMenu size={40} color="white"/></button>
    <nav>  
 
  <ul className={isOpen ? "nav-link active" : "nav-link"}>
    {/* <li>Events</li> */}
    <li>Home</li>
    <li>Contact Us</li>
    <li>About Us</li>
  </ul>
  
 </nav> 
  </header>
  

 <section>
   <Image className="hero-img image-common" src={'/images/persons/hero 4.png'} alt='Coffee art image' width={600} height={600} />
   
   <div className="hero-texts">
   <h1 className="title-hero">Where <span className="hero-passion"> Passion</span> Meets <span className="hero-perfection">Perfection</span></h1>

   
   <div className="hero-text-desc">
   Elevate your COFFEE journey at <span className="bznm">BZN <sup>M</sup></span>
        </div>
    <Link href="/signUp" className="enroll-btn">ENROLL NOW</Link>

  </div>
 </section>


    <div className="social-icons">
      <Link href="#"><FaTelegram size={35} color="#1e3d2e"/></Link>
      <Link href="#"><CiInstagram size={35} color="#1e3d2e"/></Link>
      <Link href="#"><CiYoutube size={35} color="#1e3d2e"/></Link>
      <Link href="#"><CiFacebook  size={35} color="#1e3d2e"/></Link>
      <Link href="#"><PiTiktokLogoThin  size={35}color="#1e3d2e"/></Link>
    </div>



 <div className="services">
  
    <div className="cards card-1">
      
        
      <Image className="card-img card-img-1 image-common" src={"/images/bzn.jpg"}  alt='Coffee art image' width={500} height={500} />
      
      <div className="card-text">
    <SlBadge className="card-badge"  size={40} color="#754d1c"/>

        <h3 className="card-title">One month class</h3>
        <p>
        Join our 1-month coffee barista training program, offering flexible 
        3-shift schedules. Whether you are an early riser or prefer later hours, 
        choose from morning (5:00-7:00), afternoon (8:00-10:00), or evening (10:00-12:00) sessions. 
        Learn essential barista skills, perfect your craft, and start your coffee journey today!

        </p>
        <Link href="#" className="card-btn">Get Started</Link>
      </div>
    </div>
    <div className="cards card-2">
      
        
      <div className="card-text">
    <SlBadge className="card-badge"  size={40} color="#754d1c"/>

        <h3 className="card-title">15-Day calss</h3>
        <p>
        Join our intensive 15-day barista training course, with classes 
        held three times a week on Tuesday, Wednesday, and Saturday. The schedule is 
        adaptable, allowing for adjustments based on course coverage to ensure 
        you gain all the necessary skills. Perfect your coffee-making techniques and build a 
        strong foundation for a successful barista career with us!

        </p>
        <Link href="#" className="card-btn">Get Started</Link>
      </div>
      <Image className="card-img card-img-2 image-common" src={"/images/persons/group.png"} alt='Coffee art image' width={500} height={500} />

    </div>

    <div className="cards card-3">
      
        
      <Image className="card-img card-img-1 image-common" src={"/images/persons/hero 1.png"}  alt='Coffee art image' width={500} height={500} />
      
      <div className="card-text">
    <SlBadge className="card-badge"  size={40} color="#754d1c"/>

        <h3 className="card-title">Barista Training For Hotels</h3>
        <p>
        Barista Training for Hotels is a specialized program designed to 
        equip hotel staff with expert coffee-making skills. Learn to craft 
        perfect espressos, lattes, and cappuccinos to elevate guest experiences. 
        Our comprehensive course covers everything from operating commercial 
        machines to mastering latte art, ensuring your 
        hotel serves exceptional coffee with every cup.

        </p>
        <Link href="#" className="card-btn">Get Started</Link>
      </div>
    </div>
      
    
    
</div>


{/* gallery */}
<h4 className="gallery-title">Events & experiences</h4>
<div className="gallery">
	<Image src={"/images/persons/group 1.jpg"} width={500} height={500} alt="a forest after an apocalypse" />
	<Image src={"/images/persons/group 2.jpg"} width={500} height={500} alt="a waterfall and many rocks" />
	<Image src={"/images/persons/group 3.jpg"} width={500} height={500} alt="a house on a mountain" />
	<Image src={"/images/persons/group 4.jpg"} width={500} height={500} alt="sime pink flowers" />
	<Image src={"/images/persons/group.jpg"} width={500} height={500} alt="big rocks with some trees" />
</div>
<h5 className="gallery-text">You will have a chance to learn with real experiences.</h5>


{/* WHY */}
<h2 className="why">Why Choose BZNM?</h2>
<div className="three-cards">
  
  <div className="one-of-three">
    <CiCoffeeBean size={50} color="#754d1c"/>    
    <p>At BZNM, we believe that great coffee starts with great baristas, 
      and we are committed 
      to fostering the next generation of coffee professionals.</p>
  </div>
  <div className="one-of-three">
  <SiCoffeescript size={50} color="#754d1c"/>
    <p>
    What sets BZNM apart is that it offers a unique, one-of-a-kind class that 
    is new to Ethiopia, making it an ideal starting point for anyone looking to 
    begin their journey in the coffee industry. Whether you are aiming to start a 
    career in coffee, open your own café, or deepen your appreciation for the perfect 
    cup, BZNM School of Barista and Training is the perfect place to cultivate your 
    passion and expertise. 
    </p>
  </div>
  <div className="one-of-three">
  <TbCoffee size={50} color="#754d1c"/>
    <p>BZNM School of Barista and Training is a premier institution in 
      Ethiopia dedicated to providing world-class barista education and 
      coffee training. Our comprehensive curriculum equips aspiring baristas and 
      coffee enthusiasts with the knowledge, skills, 
      and confidence to excel in the dynamic world of specialty coffee. </p>
  </div>
</div>

<div className="services-two">
  <div className="services-two-text">
  
    <div className="services-two-title">About BZN</div>
    <p>BZNM School of Barista and Training is a premier institution 
      in Ethiopia dedicated to providing world-class barista education and coffee 
      training. Our comprehensive curriculum equips aspiring baristas 
      and coffee enthusiasts with the knowledge, 
      skills, and confidence to excel in the dynamic world of specialty coffee. </p>
  </div>
  <Image className="long-img image-common" src={"/images/persons/group 2.jpg"} width={800} height={800} alt="Coffee art image" />
</div>

<SignUP />

<div className="logo-bottom-container">
  <div className="row-map">
      <h3 className="bottom-title"> BZNM School of Barista and Training. </h3>
  </div>
<div className="map-section">
  <ul className="address-map">
    <li className="address-line"><SlLocationPin size={20} color="rgba(193,141,35,255)"/>&nbsp; &nbsp; Adiss Ababa, Ethiopia </li>
    <li className="address-line"><PiBuilding size={20} color="rgba(193,141,35,255)"/>&nbsp; &nbsp; Megenagna Street, Capital building 11<sup>th</sup> floor</li>
    <li className="address-line"><PiPhoneCall size={20} color="rgba(193,141,35,255)"/>&nbsp; &nbsp;  0911223344 </li>
    <li className="address-line"><PiMailbox size={20} color="rgba(193,141,35,255)"/>&nbsp; &nbsp;  bznEthio@gmail.com </li>
  </ul>
  <div className="gmap-frame">
    <iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Adiss%20ababa%20airport+(BZNM%20School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
    <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
  </div>
</div>
<div className="row-map">
      <h3 className="bottom-title"> BZNM School of Barista and Training. </h3>
  </div>
</div>


  {/* Footer */}

  <footer className="footer">
  	 <div className="footer-container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Schedules</a></li>
  	 				<li><a href="#">Payment</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Location</h4>
  	 			<ul>
  	 				<li><a href="#">Addis Ababa Ethiopia</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><FaTelegram size={35} color="#bbbbbb"/></a>
  	 				<a href="#"><CiInstagram size={35} color="#bbbbbb"/></a>
  	 				<a href="#"><CiYoutube size={35} color="#bbbbbb"/></a>
  	 				<a href="#"><CiFacebook  size={35} color="#bbbbbb"/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     
     <p id="copyright" className="copyright">
                Copyright &copy; 2024 BZNM
            </p>
  </footer>



 </>
  );
}
