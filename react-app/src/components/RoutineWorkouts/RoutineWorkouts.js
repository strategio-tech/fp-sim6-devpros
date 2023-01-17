import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import NavBar from '../NavBar';
import Footer from '../Footer/Footer';

import {getWorkoutsThatBelongToAWorkoutPlan} from '../../store/workoutPlan';
import {deleteAWorkoutFromAPlan} from '../../store/user';

function RoutineWorkouts() {
    const {id} = useParams();

    const dispatch = useDispatch();
    const workouts = useSelector(state => state.workoutPlan);

    const workoutPlans = useSelector(state => state.user);

    useEffect(()=> {
        dispatch(getWorkoutsThatBelongToAWorkoutPlan(id))
    },[])


    const handleDelete = (workout_id) => {

        const payload = {
            workout_plan_id: parseInt(id),
            workout_id: parseInt(workout_id)
        }
        dispatch(deleteAWorkoutFromAPlan(payload))
        window.location.reload();
    }



  return (
    <div className='main-div'>

    <h1 className="workout-header">My workouts</h1>

    <div className="workout-container">
      {workouts.length=== 0? <h1 className="no-workouts">You haven't added any workouts</h1> :
        workouts.map(workout => {
          return (
            <div classname="solo-workout" key={workout.id}>
              <h3 className='workout-name'> {workout.name} </h3>
              <img src={workout.gifUrl} alt={workout.name} />
              <button className="delete-workout-button" onClick={() => handleDelete(workout.id)}>Remove from workout plan</button>
            </div>
          )
        })
      }
  </div>

    <Footer />
  </div>
  )
}

export default RoutineWorkouts
