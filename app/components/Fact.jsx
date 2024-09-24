import React from "react";
import { GiChart } from "react-icons/gi";
import { VscCoffee } from "react-icons/vsc";
import { TbBrandCashapp } from "react-icons/tb";
import "./fact.css";

const Fact = () => {
  return (
    <div className="fact-main">
      <div className="fact-container">
        <div className="fact-text">
          <h4>Why Coffee?</h4>
        </div>
        <div className="fact-card-container">
          <div className="fact-card">
            <div>
              <GiChart size={30} color="#1e3d2e" />
            </div>
            <p className="fact-number">
              $9.9<span>M</span>
            </p>
            <p className="fact-footer">Back bone for ethiopian economy.</p>
          </div>
          <div className="fact-card">
            <div>
              <TbBrandCashapp size={30} color="#1e3d2e" />
            </div>
            <p className="fact-number">
              $15<span>K</span>
            </p>
            <p className="fact-footer">
              Barista, Highest paying and offers flexibility.
            </p>
          </div>
          <div className="fact-card">
            <div>
              <VscCoffee size={30} color="#1e3d2e" />
            </div>
            <p className="fact-number">
              $12.4<span>M</span>
            </p>
            <p className="fact-footer">
              Cup of coffee consomed daily in Ethiopia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
