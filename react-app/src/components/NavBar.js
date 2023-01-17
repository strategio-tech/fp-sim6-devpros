import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'


import LogoutButton from './auth/LogoutButton';

import './navbar.css';
import CreateWorkoutPlan from './CreateWorkoutPlan/CreateWorkoutPlan';

const NavBar = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  return (
    <div className="navBar">
      <div className="navBar__left">
        <div className="navBar__logo">
          <NavLink to="/feed" exact={true} activeClassName="active">
            Get After It
          </NavLink>
        </div>
        </div>
          <div className="navbar_right">
            <div className="navbar__links">
              <NavLink to="/feed" exact={true} activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/about" exact={true} activeClassName="active">
                About
              </NavLink>
              <CreateWorkoutPlan />
              <NavLink to="/my-routine" exact={true} activeClassName="active">
                My Workout Plans
              </NavLink>
              <LogoutButton />
          </div>
        </div>
      </div>
  );
}

export default NavBar;
