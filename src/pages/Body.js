import React from 'react'
import { DataFetcher } from "../components/DataFetcher";
import { UserAuth } from '../context/AuthContext'
import gif from '../assets/gif/Auction.gif'


// Auction Page Fetch here

export const Body = () => {
  const { user } = UserAuth();
  return (
    <div className='body'>
      <div className='body-gif-1'> <img src={gif}/> </div>
      <DataFetcher/>
    </div>
   
  ) }
