import React from "react";
import { CiCoffeeBean } from "react-icons/ci";
import { TbCoffee } from "react-icons/tb";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import "./threeCards.css";
import Image from "next/image";
import Parallax from "./Parallax";

const ThreeCards = () => {
  return (
    <div className="three-cards-container">
      <Parallax scale={[1, 0]}>
      <h2 className="why">Why BZNM?</h2>
      </Parallax>
      <div className="three-cards">
        <div className="one-of-three">
          <div className="three-card-images-container">
      <Parallax speed={1} className={"self-end"}>

            <Image
              className="three-card-image three-card-1"
              src={"/images/bean1.jpg"}
              alt="Coffee art image"
              width={300}
              height={200}
            />
            </Parallax>
      <Parallax speed={-2} className={"self-end"}>

            <Image
              className="three-card-image three-card-2"
              src={"/images/bean6.jpg"}
              alt="Coffee art image"
              width={200}
            height={300}
              
            />
            </Parallax>
      <Parallax speed={1} className={"self-end"}>

            <Image
              className="three-card-image three-card-2"
              src={"/images/bean6.jpg"}
              alt="Coffee art image"
              width={200}
            height={300}
              
            />
            </Parallax>
          </div>

          <CiCoffeeBean className="three-card-icon" size={70} color="#1e3d2e" />
          <p>
            At BZNM, we believe that{" "}
            <span className="card-span">
              {" "}
              great coffee starts with great baristas
            </span>
            , and we are committed to fostering the next generation of coffee
            professionals.
          </p>
        </div>
        <div className="one-of-three">
        <div className="three-card-images-container">
        <Parallax speed={-1} className={"self-start"}>
          <Image
            className="three-card-image three-card-3"
            src={"/images/bean3.jpg"}
            alt="Coffee art image"
            width={200}
            height={300}
          />
          </Parallax>
        <Parallax speed={2} className={"self-start"}>

          <Image
            className="three-card-image three-card-3"
            src={"/images/bean3.jpg"}
            alt="Coffee art image"
            width={200}
            height={300}
          />
          </Parallax>
        <Parallax speed={1} className={"self-start"}>

          <Image
            className="three-card-image three-card-3"
            src={"/images/bean3.jpg"}
            alt="Coffee art image"
            width={200}
            height={300}
          />
          </Parallax>
          </div>
          <MdOutlineCoffeeMaker className="three-card-icon" size={70} color="#1e3d2e" />
          <p>
            What sets BZNM apart is that it offers a{" "}
            <span className="card-span">unique and one-of-a-kind class </span>
            that is new to Ethiopia, making it an ideal starting point for
            anyone looking to begin their journey in the coffee industry.
            Whether you are aiming to start a career in coffee, open your own
            café, or deepen your appreciation for the perfect cup, BZNM School
            of Barista and Training is the perfect place to cultivate your
            passion and expertise.
          </p>
        </div>
        <div className="one-of-three">
        <div className="three-card-images-container">
        <Parallax speed={-2} className={"self-end"}>

          <Image
            className="three-card-image three-card-5"
            src={"/images/bean5.jpg"}
            alt="Coffee art image"
            width={300}
            height={300}
          />
        </Parallax>
        <Parallax speed={1.5} className={"self-end"}>

          <Image
            className="three-card-image three-card-6"
            src={"/images/bean2.jpg"}
            alt="Coffee art image"
            width={400}
              height={300}
          />
          </Parallax>

          </div>
          <TbCoffee className="three-card-icon" size={70} color="#1e3d2e" />
          <p>
            BZNM School of Barista and Training is a{" "}
            <span className="card-span"> premier institution in Ethiopia </span>{" "}
            dedicated to providing world-class barista education and coffee
            training. Our comprehensive curriculum equips aspiring baristas and
            coffee enthusiasts with the knowledge, skills, and confidence to
            excel in the dynamic world of specialty coffee.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
