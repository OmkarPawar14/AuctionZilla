import React from "react";
import { Link } from "react-router-dom";
import aucImg from "../assets/wallpaper/Auction-1.svg";

export const Home = () => {
  return (
    <div className="body">
      <div className="wall-1">
        <img className="img-auc-1" src={aucImg} />
        <div className="headline" bac>Welcome To AuctionZilla..!</div>
        <div className="p">
        AuctionZilla is a one-stop online bidding system that is easy to use.
        </div>
      </div>
      <div className="p">
      From placing bids to making payments, everything is done on this website.
      </div>
      <div className="p">
      Backed by one of the finest database provided by the Google. In just two steps, you can become the owner of rare and expensive items.
      </div>
      <div className="p">There are no additional costs. No hidden charges.💲.</div>

      <div className="container">
        <div>Create an Auction Here... </div>
        <Link to="/auction">Auction</Link> 
         <div className="container-2">See Auctions Here... </div>
        <Link to="/create">Create</Link>
      </div>
      <div>
     
        
      </div>
    </div>
  );
};
