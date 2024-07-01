import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './LoginForm.css';

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // 初始化錯誤對象
    let newErrors = {};

    // 檢查name和password是否為空
    if (!name.trim()) {
      newErrors.name = '使用者名稱不可以為空';
    }
    if (!password.trim()) {
      newErrors.password = '密碼不可以為空';
    }

    // 如果有錯誤，更新錯誤狀態並返回
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 如果沒有錯誤，清除錯誤狀態並提交表單
    setErrors({});
    onSubmit({ name, password });
  };
  return (
    <div className="login-form">
      <h2 className="login-form__title">Login</h2>
      <form className="login-form__form" onSubmit={handleSubmit}>
        <div className="center-horizontal">
          <FaUserCircle style={{ fontSize: '90px', color: '#cdcdcd' }} />
        </div>
        <label className="login-form__label">
          使用者名稱:
          <input
            className="login-form__input"
            type="text"
            value={name}
            placeholder="請輸入使用者名稱"
            onChange={(e) => setName(e.target.value)}
            autoComplete="username"
          />
          {errors.name && (
            <div className="login-form__error">{errors.name}</div>
          )}
        </label>
        <label className="login-form__label">
          密碼:
          <input
            className="login-form__input"
            type="password"
            autoComplete="current-password"
            value={password}
            placeholder="請輸入密碼"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="login-form__error">{errors.password}</div>
          )}
        </label>
        <button type="submit" className="login-form__submit-button ">
          登入
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
