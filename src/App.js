import React from 'react';
import './App.css';
import { Navcomp } from './components/Navcomp';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainApp } from './MainApp';
import { Home } from './pages/Home';
import { Body } from './pages/Body';
import { DataProvider } from './context/DataContext';
import {Footcomp} from './components/Footcomp'
import ProtectedRoutes from './Routes/ProtectedRoutes';


function App() {
  return (
      <BrowserRouter>
      <AuthContextProvider>
      <DataProvider>
      <Navcomp/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/create" element={<ProtectedRoutes><MainApp/></ProtectedRoutes>}/>
        <Route path="/auction" element={<ProtectedRoutes><Body/></ProtectedRoutes>}/>
      </Routes>
      <Footcomp/>
      </DataProvider>
      </AuthContextProvider>
      </BrowserRouter>
    
    
  );
}

export default App;
