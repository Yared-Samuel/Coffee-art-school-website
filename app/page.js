import Scroll from "./components/Scroll";
// import SignUp from "./components/signUp";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardOne from "./components/CardOne";
import Gallery from "./components/Gallery";
import ThreeCards from "./components/ThreeCards";
import Fact from "./components/Fact";
import Address from "./components/Address";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Scroll />
      <Header />
      <HeroSection />
        <Fact />

      <CardOne />

      <SocialIcons />
  

      <ThreeCards />

      {/* <SignUp /> */}

      <Gallery />

      <Address />

      <Footer />
    </>
  );
}
