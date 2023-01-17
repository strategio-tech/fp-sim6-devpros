import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';



import { authenticate } from './store/session';


import Splash from './components/Splash/Splash';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Feed from './components/Feed/Feed';
import Core from './components/Workouts/Core';
import Chest from './components/Workouts/Chest';
import Back from './components/Workouts/Back.js';
import Shoulders from './components/Workouts/Shoulders';
import Arms from './components/Workouts/Arms';
import Legs from './components/Workouts/Legs';
import About from './components/About/About';
import Routine from './components/Routine/Routine';
import UserProfile from './components/UserProfile/UserProfile';
import CreateWorkoutPlan from './components/CreateWorkoutPlan/CreateWorkoutPlan';
import RoutineWorkouts from './components/RoutineWorkouts/RoutineWorkouts';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact={true}>
        <Splash />
        </Route>
        <Route path='/my-profile' exact={true}>
          <UserProfile />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/about' exact={true}>
          <About />
        </Route>
        <Route path='/feed' exact={true}>
          <NavBar />
          <Feed />
        </Route>
        <Route path='/create-routine' exact={true} >
          <NavBar />
          <CreateWorkoutPlan show={modalShow} />
        </Route>
        <Route path='/my-routine' exact={true}>
          <NavBar />
          <Routine />
        </Route>
        <Route path='/my-routine/:id' exact={true}>
          <NavBar />
          <RoutineWorkouts />
        </Route>
        <Route path='/core' exact={true}>
          <Core />
        </Route>
        <Route path='/chest' exact={true}>
          <Chest />
        </Route>
        <Route path='/back' exact={true}>
          <Back />
        </Route>
        <Route path='/shoulders' exact={true}>
          <Shoulders />
        </Route>
        <Route path='/arms' exact={true}>
          <Arms />
        </Route>
        <Route path='/legs' exact={true}>
          <Legs />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
