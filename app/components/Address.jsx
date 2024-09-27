import React from "react";
import "./address.css";
import { PiBuilding, PiMailbox, PiPhoneCall } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import locationSvg from "../../public/images/location.svg";
import Image from "next/image";
import Parallax from "./Parallax";


const Address = () => {
  return (
    <div className="address-container-image">
    <div className="logo-bottom-container">
      <Parallax speed={-1} className={"self-baseline"}>
      <Image className="location-icon" priority src={locationSvg} alt="location-Icon" width={80} height={80} />
      </Parallax>
      <div className="map-section">

      {/* <Parallax speed={-3} className={"self-end"}> */}

        <ul className="address-map">
          <li className="address-line">
            <SlLocationPin size={30} color="#1e3d2e" />
            &nbsp; &nbsp; Adiss Ababa, Ethiopia{" "}
          </li>
          <li className="address-line">
            <PiBuilding size={30} color="#1e3d2e" />
            &nbsp; &nbsp; Megenagna Street, Capital building 11<sup>
              th
            </sup>{" "}
            floor
          </li>
          <li className="address-line">
            <PiPhoneCall size={30} color="#1e3d2e" />
            &nbsp; &nbsp; 0911223344{" "} / 0912345676
          </li>
          <li className="address-line">
            <PiPhoneCall size={30} color="#1e3d2e" />
            &nbsp; &nbsp;  0912345676
          </li>
          <li className="address-line">
            <PiMailbox size={30} color="#1e3d2e" />
            &nbsp; &nbsp; bznEthio@gmail.com{" "}
          </li>
        </ul>
        {/* </Parallax> */}
      <Parallax speed={-1} className={"self-end"}>

        <div className="gmap-frame">
          <iframe
          className="gmap"
            width="500"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Adiss%20ababa%20airport+(BZNM%20School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            {/* <Link href="https://www.gps.ie/">gps vehicle tracker</Link> */}
          </iframe>
        </div>
        </Parallax>
      </div>
    </div>
    </div>
  );
};

export default Address;
