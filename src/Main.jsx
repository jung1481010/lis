import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Info from './pages/Info';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import User from './pages/User';
import RequireAuth from './components/RequireAuth';

const Right = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Routes>
          <Route path="/" element={<Info />} />
          <Route
            path="/user"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

export default Right;
