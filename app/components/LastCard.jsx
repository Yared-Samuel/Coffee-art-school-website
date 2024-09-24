import Image from "next/image";
import React from "react";
import "./lastCard.css";

const LastCard = () => {
  return (
    <div className="gallery-two">
      <Image
        src={"/images/hero 4.png"}
        width={200} height={200}
        alt="a house on a mountain"
      />
      <Image
        src={"/images/hero 4.png"}
        width={400} height={200}
        alt="sime pink flowers"
      />
      <Image
        src={"/images/hero 4.png"}
        width={400} height={200}
        alt="big rocks with some trees"
      />
      <Image
        src={"/images/hero 4.png"}
        width={400} height={200}
        alt="a waterfall, a lot of tree andgreat view from the sky"
      />
      <Image
        src={"/images/hero 4.png"}
        width={400} height={200}
        alt="a cool landscape"
      />
      <Image
        src={"/images/hero 4.png"}
        width={400} height={200}
        alt="inside a town between twobuildings"
      />
      <Image
        src={"/images/hero 4.png"}
        width={400} height={200}
        alt="a great view of the sea abovemountain"
      />
    </div>
  );
};

export default LastCard;
