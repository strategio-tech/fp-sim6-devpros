import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import { createWorkOutPlan } from '../../store/user';


import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


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




function CreateWorkoutPlan() {
  const user = useSelector(state => state.session.user);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [workout_day, setWorkoutDays] = useState('');
  const [user_id , setUserId] = useState(user.id);
  const [errors, setErrors] = useState([]);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleSubmit =  (e) => {
    e.preventDefault();

    const payload = {
      name,
      workout_day,
      user_id
    }
    // console.log({payload})
    // const serializablePayload = JSON.stringify(payload);
    // console.log(serializablePayload);

    dispatch(createWorkOutPlan(payload));
    handleClose();
  }

  function handleWorkoutRoutingName(){
    if(name.length < 4){
      setErrors(["Name must be at least 4 character"])
    } else if(name.length > 40){
      setErrors(["Name must be less than 40 character"])
    } else if (name.length > 4 && name.length < 50){
      setErrors([])
    }
  }


  return (
    <>
      <button type="button" onClick={handleOpen} className="create-workout-plan-btn">
        Create Workout Plan
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a workout plan
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          <form onSubmit={handleSubmit} id="event-form">
            {errors.map((error) => (
              <div className="signupErrors">{error}</div>
            ))}

            <div className="modal-label">
              <label className="modal-label">Give your plan a name</label>
              <input
                type='text'
                name='name'
                onBlur={() => handleWorkoutRoutingName()}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
             <label>Which day of the week is this for?</label>
              <select
                value={workout_day}
                onChange={(e) => setWorkoutDays(e.target.value)}
                className="modal-select"
                name='workout_day'
                required
              >
                <option value='' className="select-options">--Please choose an option--</option>
                <option value='Monday' className="select-options">Monday</option>
                <option value='Tuesday' className="select-options">Tuesday</option>
                <option value='Wednesday' className="select-options">Wednesday</option>
                <option value='Thursday' className="select-options">Thursday</option>
                <option value='Friday' className="select-options">Friday</option>
                <option value='Saturday' className="select-options">Saturday</option>
                <option value='Sunday' className="select-options">Sunday</option>
              </select>
          </div>
          {errors.length > 0 ? <button className="modal-button" disabled>Create workout routine</button> : <button className="modal-button">Create workout routine</button>}

        </form>
          </Typography>
        </Box>
      </Modal>
    </>
  )
}



export default CreateWorkoutPlan
