import React from 'react'
import { CiCoffeeBean } from 'react-icons/ci'
import { SiCoffeescript } from 'react-icons/si'
import { TbCoffee } from 'react-icons/tb'
import './threeCards.css'

const ThreeCards = () => {
  return (
    <div>
        <h2 className="why">Why Choose BZNM?</h2>
      <div className="three-cards">
        <div className="one-of-three">
          <CiCoffeeBean size={50} color="#754d1c" />
          <p>
            At BZNM, we believe that great coffee starts with great baristas,
            and we are committed to fostering the next generation of coffee
            professionals.
          </p>
        </div>
        <div className="one-of-three">
          <SiCoffeescript size={50} color="#754d1c" />
          <p>
            What sets BZNM apart is that it offers a unique, one-of-a-kind class
            that is new to Ethiopia, making it an ideal starting point for
            anyone looking to begin their journey in the coffee industry.
            Whether you are aiming to start a career in coffee, open your own
            café, or deepen your appreciation for the perfect cup, BZNM School
            of Barista and Training is the perfect place to cultivate your
            passion and expertise.
          </p>
        </div>
        <div className="one-of-three">
          <TbCoffee size={50} color="#754d1c" />
          <p>
            BZNM School of Barista and Training is a premier institution in
            Ethiopia dedicated to providing world-class barista education and
            coffee training. Our comprehensive curriculum equips aspiring
            baristas and coffee enthusiasts with the knowledge, skills, and
            confidence to excel in the dynamic world of specialty coffee.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThreeCards