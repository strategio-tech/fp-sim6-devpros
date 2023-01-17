import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect,Link } from 'react-router-dom';
import { login } from '../../store/session';

import loginForm from './loginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/feed' />;
  }

  const demoLogin = async () => {
    const demoEmail = 'demo@aa.io';
    const demoPassword = 'password'
    setEmail(demoEmail);
    setPassword(demoPassword);
    return dispatch(
      login('demo@aa.io', 'password')
    );
  }

  return (
    <div className="form-container">
      <div className="sign">Sign In</div>
    <form onSubmit={onLogin} className="login-form">

        {errors.map((error, ind) => (
          <div key={ind} className="signupErrors">{error}</div>
        ))}

      <div className="email-input">
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="password-input">
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit' className="submitBtn">Login</button>
        </div>
      <div className="signup-div">
      <p className="dontAccount">Already have an account?</p>
      <a className="register" href="/sign-up">Sign Up</a>
      </div>
          <p className="register" onClick={demoLogin}>Demo Login</p>

    </form>
    </div>
  );
};

export default LoginForm;
