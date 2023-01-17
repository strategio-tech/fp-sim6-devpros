import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer/Footer"

import {loadAUsersWorkoutPlans, deleteAworkoutPlan,} from '../../store/user';
import {getWorkoutsThatBelongToAWorkoutPlan} from '../../store/workoutPlan';


import './routine.css'
import { NavLink } from 'react-router-dom';

function Routine() {

  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.session.user);
  const workoutPlans = useSelector(state => state.user);
  const workouts = useSelector(state => state.workoutPlan.workout_plan_workouts);




  useEffect(() => {
      dispatch(loadAUsersWorkoutPlans(sessionUser.id));
  }, [dispatch, sessionUser.id]);


  const deleteWorkoutPlan = async (workoutPlanId) => {

    dispatch(deleteAworkoutPlan(workoutPlanId));
    window.location.href = "/my-routine";
  }



  return (
    <div className="routine-container">
      <h1>My Workout Plans</h1>
    {workoutPlans.length === 0 ? <h1 className="no-workouts">You haven't created any workout plans</h1> :
        workoutPlans && workoutPlans.map((workoutPlans) => (
          <>
          <div className="routine-header">
        </div>
          <NavLink to={`/my-routine/${workoutPlans.id}`} className="routine-workoutPlan">
            <div className="workout-plan-container">
              <h4 className="workout-plan-name">{workoutPlans.name} </h4>
              <h5 className="workout-plan-day">{workoutPlans.workout_day}</h5>
              <button className="delete-workout-plan" onClick={() =>deleteWorkoutPlan(workoutPlans.id)}>Delete Plan</button>
            </div>
          </NavLink>
          </>
        ))
      }
    <Footer />
  </div>
  )
}

export default Routine
