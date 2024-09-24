
import { CiInstagram, CiYoutube, CiFacebook } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import Scroll from "./components/Scroll";
import SignUP from "./components/signUp";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardOne from "./components/CardOne";
import Gallery from "./components/Gallery";
import ThreeCards from "./components/ThreeCards";
import Fact from "./components/Fact";
import Address from "./components/Address";
import Parallax from "./components/Parallax";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Scroll />
      <Header />
      <HeroSection />
      <Parallax speed={-3} className={"self-end"}>
      <Fact />

      </Parallax>

      <CardOne />
      
      <SocialIcons />

      {/* WHY */}
      <ThreeCards />

      

      <SignUP />

      <Gallery />      


      <Address />

      

      {/* Footer */}
      <Footer />

       
    </>
  );
}
