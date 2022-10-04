import React from "react";
import linkedin from "../assets/logo/linkedin.svg";
import twitter from "../assets/logo/twitter.svg";
import github from "../assets/logo/github.svg";

export const Footcomp = () => {
  return (
    <div>
      <div className="footer">
        <div className="contact">
          <a href="https://www.linkedin.com/in/omkar-pawar-6a406b1b4/">
            <img className="icon" src={linkedin} />
          </a>
          <a href="https://twitter.com/0xThund3rcl4p">
            <img className="icon" src={twitter} />
          </a>
          <a href="https://github.com/OmkarPawar14">
            <img className="icon" src={github} />
          </a>
          
        </div>
        <div className="love">
        <div>Made With ❤️ By Omkar Pawar</div>
      </div>
      </div>
     
    </div>
  );
};
