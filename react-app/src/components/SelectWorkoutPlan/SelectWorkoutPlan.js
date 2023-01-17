import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';


import {loadAUsersWorkoutPlans, addWorkoutToWorkoutPlan} from '../../store/user';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CreateWorkoutPlan from '../CreateWorkoutPlan/CreateWorkoutPlan';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  p: 4,

  input:{
    width: '100%',
    height: '30px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '5px',
},
  label:{
    display: 'flex',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
},
}


function SelectWorkoutPlan({workout}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.session.user);
  const workoutPlans = useSelector(state => state.user);

  const [open, setOpen] = useState(false);

  const [bodyPart, setBodyPart] = useState(workout.bodyPart);
  const [equipment, setEquipment] = useState(workout.equipment);
  const [gifUrl, setGifUrl] = useState(workout.gifUrl);
  const [id, setId] = useState(workoutPlans.id);
  const [name, setName] = useState(workout.name);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  // useEffect(() => {
  //   dispatch(loadAUsersWorkoutPlans(sessionUser.id))
  // }, [dispatch, sessionUser.id])



  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      bodyPart: bodyPart,
      equipment: equipment,
      gifUrl: gifUrl,
      name: name,
      workout_plan_id: id,
    }

    dispatch(addWorkoutToWorkoutPlan(payload))
    // dispatch(loadAUsersWorkoutPlans(sessionUser.id))

    handleClose();
  }

  function workoutPlanSelectField(){
    return (
      <select
        name="workout_plan_id"
        onChange={(e) => setId(e.target.value)}
        value={id}
        style={style.input}
        >
        <option value="">Select Workout Plan</option>
        {workoutPlans && workoutPlans.map((workoutPlan) => (
          <option key={workoutPlan.id} value={workoutPlan.id}>{workoutPlan.name}</option>
        ))}
      </select>
    )
  }


  return (
    <>
    {workoutPlans.length === 0 ?
    <div className='main-div'>
      <CreateWorkoutPlan />
      </div>
    :
      <>
     <button type="button" onClick={handleOpen} className="add-workout-btn">
        Add to Workout Plan
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Select a workout Plan to add to
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          <form onSubmit={handleSubmit} id="event-form">
            {/* {errors.map((error) => (
              <div className="event-errors">{error}</div>
            ))} */}
            <div className="event-form-div">
              <label className="event-form-label" htmlFor="workout_plan_id">
                Select a workout plan to add to
              </label>
              {workoutPlanSelectField()}
            </div>
          <button className="modal-button">Add to your routine</button>
        </form>
          </Typography>
        </Box>
      </Modal>
      </>
    }
    </>
  )
}

export default SelectWorkoutPlan
