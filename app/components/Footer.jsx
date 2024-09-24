import React from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import "./footer.css";
import Parallax from "./Parallax";


const Footer = () => {
  return (
    <Parallax speed={4} className={"self-end"}>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Schedules</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Location</h4>
              <ul>
                <li>
                  <a href="#">Addis Ababa Ethiopia</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <FaTelegram size={35} color="#bbbbbb" />
                </a>
                <a href="#">
                  <CiInstagram size={35} color="#bbbbbb" />
                </a>
                <a href="#">
                  <CiYoutube size={35} color="#bbbbbb" />
                </a>
                <a href="#">
                  <CiFacebook size={35} color="#bbbbbb" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p id="copyright" className="copyright">
          Copyright &copy; 2024 BZNM
        </p>
      </footer>
    </Parallax>
  );
};

export default Footer;
