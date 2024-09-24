import Image from "next/image";
import React from "react";
import "./gallery.css";
import Parallax from "./Parallax";


const Gallery = () => {
  return (
    <div>
      <Parallax speed={1} className={"self-baseline "}>
        <div className="gallery">
          <h4 className="gallery-text">
            THE BEST WAY TO MAKE YOUR DREAMS COME TRUE IS TO JOIN NOW!{" "}
          </h4>
          <Image
            src={"/images/group 1.jpg"}
            width={500}
            height={500}
            alt="a forest after an apocalypse"
          />
          <Image
            src={"/images/group 2.jpg"}
            width={500}
            height={500}
            alt="a waterfall and many rocks"
          />
          <Image
            src={"/images/group 3.jpg"}
            width={500}
            height={500}
            alt="a house on a mountain"
          />
          <Image
            src={"/images/group 4.jpg"}
            width={500}
            height={500}
            alt="sime pink flowers"
          />
          <Image
            src={"/images/group.jpg"}
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
