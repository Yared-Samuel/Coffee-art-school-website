import Scroll from "./components/Scroll";
import SignUp from "./components/signUp";
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

      <ThreeCards />

      <SignUp />

      <Gallery />

      <Address />

      <Footer />
    </>
  );
}
