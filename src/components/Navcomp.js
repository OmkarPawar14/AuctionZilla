import React from "react";
import {motion} from 'framer-motion'
import googlelogo from "../assets/logo/g-logo.png";
import auctionzillalogo from "../assets/logo/logo.png";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

// Navbar Is Here


export const Navcomp = () => {
  const { googleSignIn, user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <div className="site-logo">
        <Link to="/"><img src={auctionzillalogo} width="180px"/></Link>
        {/* {<img src={auctionzillalogo} width="180 px" />} */}


        
      </div>

        <div className="nav-op">
      <motion.div whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}} >
        <Link to="/" className="nav-fun">Home</Link>
       
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}>
      <Link to="/auction" className="nav-fun">Auctions</Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}>
        <Link to='/create' className="nav-fun">Create</Link>
        </motion.div>

        </div>

      <div className="navigation">
      
        
        <div className="userauth">
          {user === null ? (
            <button onClick={handleGoogleSignIn} className="googlebtn">
              {<img src={googlelogo} width="35px" />}Sign in With Google
            </button>
          ) : (
            <motion.button   whileHover={{ scale: 1.07 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="btn-logout" onClick={handleSignOut}>
              Logout
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
