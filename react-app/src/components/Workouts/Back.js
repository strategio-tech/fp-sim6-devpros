import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import './workouts.css'

import NavBar from './../NavBar';
import Footer from '../Footer/Footer';

import SelectWorkoutPlan from '../SelectWorkoutPlan/SelectWorkoutPlan';
import {loadAUsersWorkoutPlans} from '../../store/user';

function Back() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  // const user = useSelector(state => state.session.user);

  const [workout, setWorkout] = useState([]);
  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [gifUrl, setGifUrl] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  async function fetchData(){
    const response = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/target/upper%20back',
      headers: {
        'X-RapidAPI-Key': 'e0836d8aa1msh1ec96cc9063fc9ep106a46jsn9d566034434b',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    const res = await fetch(response.url, response);
    const data = await res.json();
    setWorkout(data);
    setBodyPart(data.bodyPart)
    setEquipment(data.equipment)
    setGifUrl(data.gifUrl)
    setId(data.id)
  }

  useEffect(() => {
    dispatch(loadAUsersWorkoutPlans(sessionUser.id))
    fetchData();
  }
  , []);

  const filterByEquipment = (e) => {
    e.preventDefault();
    const equipment = e.target.value;
    const filteredWorkouts = workout.filter((workout) => workout.equipment === equipment);
    setWorkout(filteredWorkouts);
    setIsClicked(true);
  };


  const removeFilter = (e) => {
    e.preventDefault();
    setIsClicked(false);
    fetchData();
  };


  return (
    <div className='main-div'>
      <NavBar />

    <h1 className="workout-header">Back</h1>
    {!isClicked?

      <div className="workout-filter">
        <button className="filter-button" value="body weight" onClick={filterByEquipment}>Body Weight</button>
        <button className="filter-button" value="band" onClick={filterByEquipment}>Band</button>
        <button className="filter-button" value="barbell" onClick={filterByEquipment}>Barbell</button>
        <button className="filter-button" value="cable" onClick={filterByEquipment}>Cable</button>
        <button className="filter-button" value="kettlebell" onClick={filterByEquipment}>Kettlebell</button>
      </div>

      :
      <div className="workout-filter">
        <button className="remove-filter-button" onClick={removeFilter}>Remove Filter</button>
      </div>
    }

    <div className="workout-container">
    {workout.map(workout => {
      return (
        <div classname="solo-workout">
          <h3 className='workout-name'> {workout.name} </h3>
          <img src={workout.gifUrl} alt={workout.name} />
          <SelectWorkoutPlan  workout={workout} />
        </div>
      )
    })}
  </div>

    <Footer />
  </div>
  )
}

export default Back
