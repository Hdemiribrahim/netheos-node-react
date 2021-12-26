import React , { useState,useEffect } from 'react'
import FaqPage from './pages/faqPage'
import AdminLoginPage from './pages/adminLoginPage'
import AdminListPage from './pages/adminListPage'
import Header from './components/layout/header'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/authContext";
import { DataContext } from "./context/dataContext";


function App() {
  const tokenString = sessionStorage.getItem('token');
  let loggedIn;
  if (tokenString) loggedIn = true;
  const [isLoggedIn, setIsLoggedIn] = React.useState(loggedIn);
  const [faqData, setFaqData] = React.useState();
  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <DataContext.Provider value={[faqData, setFaqData]}>
        <BrowserRouter>
          <Header name='Netheos' />
          <Routes>
            <Route path='/' element={<Navigate to="/faq" />} />
            <Route path='/faq' element={<FaqPage />} exact />
            <Route path='/admin' element={<AdminLoginPage />} />
            <Route path='/adminListPage' element={isLoggedIn ? <AdminListPage /> : <Navigate to="/faq" />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
