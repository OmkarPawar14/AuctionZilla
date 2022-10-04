import React from "react";
import aucImg from "../assets/wallpaper/Auction-1.svg";

export const Home = () => {
  return (
    <div className="body">
      <div className="wall-1">
        <img className="img-auc-1" src={aucImg} />
        <div className="headline">Welcome To AuctionZilla..!</div>
        <div className="p">
          AuctionZilla easy to use, and everything is done on one website.
        </div>
      </div>
      <div className="p">
        No need to Authenticate. 🔐 We use Google Authentication.
      </div>
      <div className="p">
        Become The Owner Of Rare and Expensive Items In Just ✌ Steps.
      </div>
      <div className="p">No additional expenses. No hidden Charge💲.</div>
    </div>
  );
};
