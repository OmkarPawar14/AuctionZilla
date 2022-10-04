import React, { useState, createContext, useEffect } from "react";
import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  snapshotEqual,
  updateDoc,
} from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => { 
  const { user } = UserAuth();
  const [auctions, setAuctions] = useState([]); 
  // const userId = user.uid;
  const navigate = useNavigate();



  const endAuction = (auctionId) => {
    const query = collection(db, 'auctions');

    return query.doc(auctionId).delete();
  };

  useEffect(() => {
      // if (user.uid === null || user.uid === undefined) {
      //   navigate("/app");
      // } else {
    const DataRef = collection(db, `auctions`);
    const q = query(DataRef, orderBy("dueDate", "desc"));
    const data = onSnapshot(q, (snapshot) => {
      setAuctions(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return data;
    //   }
  }, []);

  console.log(auctions.id);

  return (
    <DataContext.Provider value={{ auctions, endAuction }}>{children}</DataContext.Provider>
  );
};
