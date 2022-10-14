import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aucImg from "../assets/wallpaper/Auction-1.svg";
import aucImg2 from "../assets/wallpaper/Navigate.svg";
import aucImg3 from "../assets/wallpaper/upload.svg";

import arrowRight from "../assets/logo/arrow-right-circle-fill.svg";
import arrowLeft from "../assets/logo/arrow-left-circle-fill.svg";

// Home Page Is Here

export const Home = () => {
  return (
    <div className="body">
      <div className="wall-1">
        <img className="img-auc-1" src={aucImg} />
        <div className="introduction">
          <div className="headline">Welcome To AuctionZilla..!</div>
          <div className="p">
            AuctionZilla is a one-stop online bidding system that is easy to
            use.From placing bids to making payments, everything is done on this
            Backed by one of the finest database provided by the Google.In just
            two steps, you can become the owner of rare and expensive items.
          </div>
        </div>
      </div>

      <hr size="3" color="lavender" />

      <div className="container">
        <div className="container-1">
          <motion.div
            whileHover={{ scale: 1.07 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Link to="/auction" className="btn-box">
              <img src={aucImg2} />
            </Link>
          </motion.div>
          <div>
          <div className="">
            <div className="headline-2">Daily Auctions</div>
          </div>
          <div className="p">
            <div>
              <img className="arrow-img" src={arrowLeft} />
            </div>
            You can get a rare and beautiful item here by bidding. 
          </div>
          </div>
        </div>

        <hr />

        
        <div className="container-2">
          <motion.div
            whileHover={{ scale: 1.07 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Link to="/create" className="btn-box">
              <img src={aucImg3} />
            </Link>
          </motion.div>


          
          <div>
          <div className="headline-3">Add Auction</div>
          <div className="p">
          Here you can add your items to bid on.
          
            <div>
              <img className="arrow-img" src={arrowRight} />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Tip">*This Project is Under Devlopment*</div>
    </div>
  );
};
