import React from "react";
import googlelogo from "../assets/logo/g-logo.png";
import auctionzillalogo from "../assets/logo/logo.png";
import { UserAuth } from "../context/AuthContext";


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
        {<img src={auctionzillalogo} width="180px" />}
      </div>

      <div className="navigation">
        <div className="userauth">
          {user === null ? (
            <button onClick={handleGoogleSignIn} className="googlebtn">
              {<img src={googlelogo} width="35px" />}Sign in With Google
            </button>
          ) : (
            <button className="btn-logout" onClick={handleSignOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
