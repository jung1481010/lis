import React, { createContext, useReducer, useContext } from 'react';
import CryptoJS from 'crypto-js';

const yaeak =
  '!2xZ!h9iu-B4r2iL.HWCN3sXgGxEHhX9qsDxh3jZKR6GPMbk@wPaHAnyQ9cMv*hV';

// 建立 AuthContext
const AuthContext = createContext();

// action types
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

// 定義 reducer
function authReducer(state, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      const encryptedName = CryptoJS.AES.encrypt(
        action.payload.name,
        yaeak
      ).toString();
      const encryptedPassword = CryptoJS.AES.encrypt(
        action.payload.password,
        yaeak
      ).toString();

      localStorage.setItem('name', encryptedName);
      localStorage.setItem('password', encryptedPassword);

      return {
        ...state,
        name: action.payload.name,
        password: action.payload.password,
        isLogin: true,
      };
    case actionTypes.LOGOUT:
      localStorage.removeItem('name');
      localStorage.removeItem('password');
      return {
        ...state,
        name: '',
        password: '',
        isLogin: false,
      };
    default:
      return state;
  }
}

const AuthProvider = ({ children }) => {
  const initialState = {
    name: localStorage.getItem('name')
      ? CryptoJS.AES.decrypt(localStorage.getItem('name'), yaeak).toString(
          CryptoJS.enc.Utf8
        )
      : '',
    password: localStorage.getItem('password')
      ? CryptoJS.AES.decrypt(localStorage.getItem('password'), yaeak).toString(
          CryptoJS.enc.Utf8
        )
      : '',
    isLogin: !!localStorage.getItem('name'), // 根據 localStorage 中是否有 name 來決定初始登入狀態
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // login
  const login = (name, password) => {
    dispatch({ type: actionTypes.LOGIN, payload: { name, password } });
  };

  // logout
  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook
const useAuth = () => useContext(AuthContext);

// 導出 AuthProvider 和 useAuth
export { AuthProvider, useAuth };
