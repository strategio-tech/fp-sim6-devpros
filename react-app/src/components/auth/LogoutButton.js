import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

import './loginForm.css'

const LogoutButton = () => {
  const dispatch = useDispatch()

  const onLogout = async (e) => {
    window.location.href = '/';
    
    await dispatch(logout());
  };

  return <button onClick={onLogout} className="create-workout-plan-btn">Logout</button>;
};

export default LogoutButton;
