import Image from "next/image";
import React from "react";
import "./gallery.css";
import Parallax from "./Parallax";


const Gallery = () => {
  return (
    <div>
      <Parallax speed={1} className={"self-baseline "}>
        <div className="gallery">
          
          <Image
            src={"/images/group1.webp"}
            width={500}
            height={500}
            alt="a forest after an apocalypse"
          />
          <Image
            src={"/images/group2.webp"}
            width={500}
            height={500}
            alt="a waterfall and many rocks"
          />
          <Image
            src={"/images/group3.webp"}
            width={500}
            height={500}
            alt="a house on a mountain"
          />
          <Image
            src={"/images/group4.webp"}
            width={500}
            height={500}
            alt="sime pink flowers"
          />
          <Image
            src={"/images/group.webp"}
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
