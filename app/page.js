"use client";

import {useref} from "react"
import Image from "next/image";
import { CiInstagram, CiYoutube, CiFacebook } from "react-icons/ci";
import { PiBuilding, PiMailbox, PiPhoneCall } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { CiCoffeeBean } from "react-icons/ci";
import { TbCoffee } from "react-icons/tb";
import { SiCoffeescript } from "react-icons/si";
import Scroll from "./components/Scroll";
import SignUP from "./signUp/page";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardOne from "./components/CardOne";
import Gallery from "./components/Gallery";
import ThreeCards from "./components/ThreeCards";
import LastCard from "./components/LastCard";

export default function Home() {
  return (
    <>
      <Scroll />
      <Header />

      <HeroSection />

      <CardOne />


      {/* WHY */}
      <ThreeCards />

      {/* <div className="services-two">
        <div className="services-two-text">
          <div className="services-two-title">About BZN</div>
          <p>
            BZNM School of Barista and Training is a premier institution in
            Ethiopia dedicated to providing world-class barista education and
            coffee training. Our comprehensive curriculum equips aspiring
            baristas and coffee enthusiasts with the knowledge, skills, and
            confidence to excel in the dynamic world of specialty coffee.{" "}
          </p>
        </div>
        <Image
          className="long-img image-common"
          src={"/images/persons/group 2.jpg"}
          width={800}
          height={800}
          alt="Coffee art image"
        />
      </div> */}
      {/* <LastCard /> */}

      <SignUP />

      <Gallery />      


      <div className="logo-bottom-container">
        <div className="row-map">
          <h3 className="bottom-title">
            {" "}
            BZNM School of Barista and Training.{" "}
          </h3>
        </div>
        <div className="map-section">
          <ul className="address-map">
            <li className="address-line">
              <SlLocationPin size={20} color="rgba(193,141,35,255)" />
              &nbsp; &nbsp; Adiss Ababa, Ethiopia{" "}
            </li>
            <li className="address-line">
              <PiBuilding size={20} color="rgba(193,141,35,255)" />
              &nbsp; &nbsp; Megenagna Street, Capital building 11<sup>
                th
              </sup>{" "}
              floor
            </li>
            <li className="address-line">
              <PiPhoneCall size={20} color="rgba(193,141,35,255)" />
              &nbsp; &nbsp; 0911223344{" "}
            </li>
            <li className="address-line">
              <PiMailbox size={20} color="rgba(193,141,35,255)" />
              &nbsp; &nbsp; bznEthio@gmail.com{" "}
            </li>
          </ul>
          <div className="gmap-frame">
            <iframe
              width="600"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Adiss%20ababa%20airport+(BZNM%20School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              {/* <Link href="https://www.gps.ie/">gps vehicle tracker</Link> */}
            </iframe>
          </div>
        </div>
        <div className="row-map">
          <h3 className="bottom-title">
            {" "}
            BZNM School of Barista and Training.{" "}
          </h3>
        </div>
      </div>

      {/* Footer */}

      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Schedules</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Location</h4>
              <ul>
                <li>
                  <a href="#">Addis Ababa Ethiopia</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <FaTelegram size={35} color="#bbbbbb" />
                </a>
                <a href="#">
                  <CiInstagram size={35} color="#bbbbbb" />
                </a>
                <a href="#">
                  <CiYoutube size={35} color="#bbbbbb" />
                </a>
                <a href="#">
                  <CiFacebook size={35} color="#bbbbbb" />
                </a>
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
