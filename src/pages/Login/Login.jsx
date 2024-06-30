import React from 'react';
import LoginForm from '../../components/LoginForm';
import { useAuth } from '../../providers/AuthProvider';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (userInfo) => {
    login(userInfo.name, userInfo.password);
  };

  return (
    <div className="center-horizontal">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
