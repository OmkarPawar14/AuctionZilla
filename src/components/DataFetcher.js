import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import {db} from "../config/firebase"
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from '../context/AuthContext'
import Countdown from "react-countdown";



export const DataFetcher = () => {
  const { auctions } = useContext(DataContext);
  const { user } = UserAuth();


  
 const bidAuction = (auctionId, price) => {
  let newPrice = price + 100;
  const query = doc(db, 'auctions', auctionId);

  try {
    updateDoc(query, {
      startPrice: newPrice,
      curWinner: user.email,
    })
  } catch (e) {
    alert("Error adding document: ", e);
  }
 }
  
const cancelAuction = (auctionId)=>{
  const query = doc(db, 'auctions', auctionId);
  deleteDoc(query);
}

  return (
    
    <div>
      {auctions.map((auction) => (
        <div className="auc-Card" key={auction.id}>
          {console.log(auction.timestamp.toDate().getTime())}
          <div className="auc-title">{auction.itemTitle}</div>
          <div className="auc-body">
            <div>
              <img className="auc-img" src={auction.imageUrl} />
            </div>
            <div>
              <table>
                <tr>
                  <td>Description:</td>
                  <td>{auction.desc}</td>
                </tr>
                <tr>
                  <td>Seller: </td>
                  <td>{auction.seller}</td>
                </tr>
                <tr>
                  <td>Due date:</td>
                  <td>{<Countdown date={auction.timestamp.toDate().getTime() + auction.dueDate} />}</td>
                </tr>
                <tr>
                  <td>Start price: </td>
                  <td>{auction.startPrice}</td>
                </tr>
              </table>
            </div>
            <div>
              <button className="bid-btn" onClick={() => bidAuction(auction.id, auction.startPrice)}>Bid</button>
              {user.uid === auction.sellerId ? <button className="Cancel-btn" onClick={() => cancelAuction(auction.id)}>Cancel</button> : <button className="Cancel-btn" disabled>Cancel</button>} 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
