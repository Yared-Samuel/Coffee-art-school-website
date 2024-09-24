import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { PiTiktokLogoThin } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import "./socialIcons.css";
import Parallax from "./Parallax";

const SocialIcons = () => {
  return (
    <>
      <div className="social-icons-1">
        <div>
        <Link className="icon-one" href="#">

          <CiYoutube size={35} color="rgba(193, 141, 35, 255)" />

        </Link>
        <Link className="icon-one" href="#">
          <CiFacebook size={35} color="rgba(193, 141, 35, 255)" />
        </Link>
        <Link className="icon-one" href="#">
          <PiTiktokLogoThin size={35} color="rgba(193, 141, 35, 255)" />
        </Link>
        </div>
      </div>
      <Parallax speed={-1} className={"self-end"}>

      <h3 className="social-title">First In &nbsp; <span>Ethiopia</span></h3>
      </Parallax>
      <p className="social-desc">BZNM is the first international Barista school! Teachs with passion.</p>
      <Parallax speed={-2} className={"self-end"}>
      
      <div className="social-icons-2">
      <div>
        <Link className="icon-one" href="#">
          <FaTelegram size={35} color="rgba(193, 141, 35, 255)" />
        </Link>
        <Link className="icon-one" href="#">
          <CiInstagram size={35} color="rgba(193, 141, 35, 255)" />
        </Link>
        <Link className="icon-one" href="#">
          <CgMail size={35} color="rgba(193, 141, 35, 255)" />
        </Link>
      </div>
      </div>
      </Parallax>
    </>
  );
};

export default SocialIcons;
