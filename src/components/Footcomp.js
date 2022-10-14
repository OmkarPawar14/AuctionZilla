import React from "react";
import {motion} from 'framer-motion';
import linkedin from "../assets/logo/linkedin.svg";
import twitter from "../assets/logo/twitter.svg";
import github from "../assets/logo/github.svg";

// Footer Is Here

export const Footcomp = () => {
  return (
    <div>
      <div className="footer">
        <div className="contact">
          <motion.a whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}} href="https://www.linkedin.com/in/omkar-pawar-6a406b1b4/">
            <img className="icon" src={linkedin} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}} href="https://twitter.com/0xThund3rcl4p">
            <img className="icon" src={twitter} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}} href="https://github.com/OmkarPawar14">
            <img className="icon" src={github} />
          </motion.a>
          
        </div>
        <div className="love">
        <div>Made With ❤️ By Omkar Pawar | Copyrights© Reserved  </div>
      </div>
      </div>
     
    </div>
  );
};
