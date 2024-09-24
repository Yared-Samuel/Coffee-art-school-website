import Image from "next/image";
import React from "react";
import "./gallery.css";
import Parallax from "./Parallax";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A component that displays a gallery of images using the Parallax component.
 *
 * The gallery has a class of "gallery" and displays the following images:
 * - group 1.jpg
 * - group 2.jpg
 * - group 3.jpg
 * - group 4.jpg
 * - group.jpg
 *
 * @return {ReactElement} A React element representing the gallery.
 */
/******  a2fb480a-654d-4536-bbac-0ec3a1aed081  *******/
const Gallery = () => {
  return (
    <div>
      <Parallax speed={1} className={"self-baseline "}>
        <div className="gallery">
          <h4 className="gallery-text">
            THE BEST WAY TO MAKE YOUR DREAMS COME TRUE IS TO JOIN NOW!{" "}
          </h4>
          <Image
            src={"/images/persons/group 1.jpg"}
            width={500}
            height={500}
            alt="a forest after an apocalypse"
          />
          <Image
            src={"/images/persons/group 2.jpg"}
            width={500}
            height={500}
            alt="a waterfall and many rocks"
          />
          <Image
            src={"/images/persons/group 3.jpg"}
            width={500}
            height={500}
            alt="a house on a mountain"
          />
          <Image
            src={"/images/persons/group 4.jpg"}
            width={500}
            height={500}
            alt="sime pink flowers"
          />
          <Image
            src={"/images/persons/group.jpg"}
            width={500}
            height={500}
            alt="big rocks with some trees"
          />
        </div>
      </Parallax>
    </div>
  );
};

export default Gallery;
