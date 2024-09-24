import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./cardOne.css";
import Parallax from "./Parallax";


const CardOne = () => {
  return (
    <div className="card-one-caontainer">
      <div className="card-one-title-container">
        <h3 className="card-one-title-fix">Big Offers</h3>
        <Parallax speed={3} className={"self-start"}>
          <h3 className="card-one-title-down">Big Offers</h3>
        </Parallax>
      </div>
      <div className="services">
        <Parallax speed={-2} className={"self-baseline "}>
          <div className="cards card-1">
            <Image
              className="card-img card-img-1 image-common"
              src={"/images/bzn.jpg"}
              alt="Coffee art image"
              width={500}
              height={500}
            />

            <div className="card-text">
              <h3 className="card-title">One month class</h3>
              <p>
                Join our 1-month coffee barista training program, offering
                flexible 3-shift schedules. Whether you are an early riser or
                prefer later hours, choose from morning (5:00-7:00), afternoon
                (8:00-10:00), or evening (10:00-12:00) sessions. Learn essential
                barista skills, perfect your craft, and start your coffee
                journey today!
              </p>
              <Link href="#" className="card-btn">
                Get Started
              </Link>
            </div>
          </div>
        </Parallax>
        <div className="card-one-title-container">
          <h3 className="card-one-title-fix">Short schedules</h3>
          <Parallax speed={2} className={"self-start "}>
            <h3 className="card-one-title-down">Short schedules</h3>
          </Parallax>
        </div>
        <Parallax speed={1} className={"self-start "}>
          <div className="cards card-2">
            <div className="card-text">
              <h3 className="card-title">15-Day calss</h3>
              <p>
                Join our intensive 15-day barista training course, with classes
                held three times a week on Tuesday, Wednesday, and Saturday. The
                schedule is adaptable, allowing for adjustments based on course
                coverage to ensure you gain all the necessary skills. Perfect
                your coffee-making techniques and build a strong foundation for
                a successful barista career with us!
              </p>
              <Link href="#" className="card-btn">
                Get Started
              </Link>
            </div>

            <Image
              className="card-img card-img-2 image-common"
              src={"/images/persons/group.png"}
              alt="Coffee art image"
              width={500}
              height={500}
            />
          </div>
        </Parallax>
        <div className="card-one-title-container">
          <h3 className="card-one-title-fix">For Your Business</h3>
          <Parallax speed={2} className={"self-auto "}>
            <h3 className="card-one-title-down">For Your Business</h3>
          </Parallax>
        </div>
        <Parallax speed={-1} className={"self-start "}>
          <div className="cards card-3">
            <Image
              className="card-img card-img-1 image-common"
              src={"/images/persons/hero 1.png"}
              alt="Coffee art image"
              width={500}
              height={500}
            />

            <div className="card-text">
              <h3 className="card-title">Barista Training For Hotels</h3>
              <p>
                Barista Training for Hotels is a specialized program designed to
                equip hotel staff with expert coffee-making skills. Learn to
                craft perfect espressos, lattes, and cappuccinos to elevate
                guest experiences. Our comprehensive course covers everything
                from operating commercial machines to mastering latte art,
                ensuring your hotel serves exceptional coffee with every cup.
              </p>
              <Link href="#" className="card-btn">
                Get Started
              </Link>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default CardOne;
