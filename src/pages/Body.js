import React from 'react'
import { Navigate } from 'react-router-dom';
import { DataFetcher } from "../components/DataFetcher";
import { UserAuth } from '../context/AuthContext'




export const Body = () => {
  const { user } = UserAuth();
  return (
    <div className='body'>
      <DataFetcher/>
    </div>
   
  ) }
