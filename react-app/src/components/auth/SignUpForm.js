import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Footer from '../Footer/Footer';
import './signUpForm.css'

import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';



const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }


  function emailErrorHandling(){
    if(email.length < 5){
      setErrors(["Email must be at least 5 characters"])
    } else if(!email.includes("@")){
      setErrors(["Email must include @"])
    } else if(!email.includes(".")){
      setErrors(["Email must include ."])
    } else {
      setErrors([])
    }

  }

  function passwordErrorHandling(){
    if(password.length < 6){
      setErrors(["Password must be at least 6 characters"])
    } else if(password === username){
      setErrors(["Password cannot be the same as username"])
    } else if(password === email){
      setErrors(["Password cannot be the same as email"])
    } else {
      setErrors([])
    }
  }

  function usernameErrorHandling(){
    if(username.length < 4){
      setErrors(["Username must be at least 4 characters"])
    } else if(username === email){
      setErrors(["Username cannot be the same as email"])
    } else {
      setErrors([])
    }
  }

  function repeatPasswordErrorHandling(){
    if(repeatPassword !== password){
      setErrors(["Passwords must match"])
    } else {
      setErrors([])
    }
  }


  return (
  <>
  <div className="splash-container-left">
      <div className="splash left">
        {/* <AliceCarousel autoPlay autoPlayInterval="3000">
    <p><img src={image1} className="sliderimg" alt="background" /></p>
    <p><img src={image2} className="sliderimg" alt="background" /></p>
    <p><img src={image3} className="sliderimg" alt="background" /></p>
    <p><img src={image4} className="sliderimg" alt="background" /></p>
  </AliceCarousel > */}
        <div className="centered">
          {/* <h1 className="header"> Lets Get After It</h1>
          <span>
            <span> Fitness </span>
            <span> Made    </span>
            <span> Simple  </span>
          </span> */}
          <p className="bio-signup">Fitness doesnt need to be complicated. Thats why we looked for ways to simplify it so everyone can live a healthy life. Join our community, post your workouts, give or receive advice from other like minded individuals.</p>
        </div>
      </div>
    </div>

    <div className="splash-container-right">
            <div className="splash right">
            <div className="centered">
    <form onSubmit={onSignUp}>
          {errors.map((error, ind) => (
            <div key={ind} className="signupErrors">{error}</div>
          ))}

        <div className="signupInputs">
          <label>User Name</label>
          <input
            placeholder='Create a username'
            type='text'
            name='username'
            onChange={updateUsername}
            onBlur={() => usernameErrorHandling()}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder='Enter an email'
            type='text'
            name='email'
            onChange={updateEmail}
            onBlur={() => emailErrorHandling()}
            value={email}
          ></input>
        </div>
        <div >
          <label>Password</label>
          <input
            placeholder='Create a password'
            type='password'
            name='password'
            onChange={updatePassword}
            onBlur={() => passwordErrorHandling()}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            placeholder='Repeat your password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            onBlur={() => repeatPasswordErrorHandling()}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        {errors.length > 0 ? <button className="signup-btn" disabled>Sign Up</button> : <button className="signup-btn">Sign Up</button>}

      </form>

      <div className="registerContainer">
      <p className="dontAccount">Already have an account?</p>
      <a className="register" href="/">Log in</a>
      </div>

      </div>

            </div>

        </div>


        <Footer />
      </>
  );
};

export default SignUpForm;
