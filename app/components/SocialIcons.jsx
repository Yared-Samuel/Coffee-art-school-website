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
    <div className="social-icon-container">
      <div className="social-icons-1">
      <Parallax speed={2.5} className={"self-end"}>
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
        </Parallax>
      </div>
      <Parallax speed={0.2} className={"self-end"}>
        <h3 className="social-title">
          First In &nbsp; <span>Ethiopia</span>
        </h3>
      </Parallax>
      <p className="social-desc">
        BZNM is the first international Barista school! Teachs with passion.
      </p>
        <div className="social-icons-2">
        <Parallax speed={-5} className={"self-end"}>
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
          </Parallax>
        </div>
        <Parallax speed={-2} className={"self-end"}>

        <div className="content">
    <h2>BEST IN NATION!</h2>
    <h2>BEST IN NATION!</h2>
  </div>
  </Parallax>
    </div>
  );
};

export default SocialIcons;
