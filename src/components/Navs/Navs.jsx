import React from 'react';
import './Navs.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
const Navs = () => {
  const {
    state: { isLogin },
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navs">
      <ul className="navs__menu">
        <li className="navs__menu-item">
          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? 'navs__menu-button navs__menu-button--active'
                    : 'navs__menu-button'
                }
              >
                公司介紹
              </span>
            )}
          </NavLink>
        </li>
        <li className="navs__menu-item">
          <NavLink to="/user">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? 'navs__menu-button navs__menu-button--active'
                    : 'navs__menu-button'
                }
              >
                版本與用戶資訊
              </span>
            )}
          </NavLink>
        </li>
        {
          isLogin && (
            <li className="navs__menu-item">
              <button
                className="navs__menu-button"
                // disabled={!isLogin}
                onClick={handleLogout}
              >
                登出
              </button>
            </li>
          )
          //  : (
          //   <li className="navs__menu-item">
          //     <NavLink to="/login">
          //       {({ isActive }) => (
          //         <span
          //           className={
          //             isActive
          //               ? 'navs__menu-button navs__menu-button--active'
          //               : 'navs__menu-button'
          //           }
          //         >
          //           登入
          //         </span>
          //       )}
          //     </NavLink>
          //   </li>
          // )
        }
      </ul>
    </nav>
  );
};

export default Navs;
