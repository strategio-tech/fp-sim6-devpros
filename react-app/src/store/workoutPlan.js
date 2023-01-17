const CREATE_WORKOUT_PLAN = 'workoutPlan/CREATE_WORKOUT_PLAN';
const UPDATE_WORKOUT_PLAN = 'workoutPlan/UPDATE_WORKOUT_PLAN';
const DELETE_WORKOUT_PLAN = 'workoutPlan/DELETE_WORKOUT_PLAN';
const GET_WORKOUT_PLAN = 'workoutPlan/GET_WORKOUT_PLAN';
const DELETE_WORKOUT = 'workoutPlan/DELETE_WORKOUT';
const ADD_WORKOUT = 'workoutPlan/ADD_WORKOUT';

const createWorkoutPlan = (workoutPlan) => ({
    type: CREATE_WORKOUT_PLAN,
    payload: workoutPlan
});

const updateWorkoutPlan = (workoutPlan) => ({
    type: UPDATE_WORKOUT_PLAN,
    payload: workoutPlan
});

const deleteWorkoutPlan = (workoutPlan) => ({
    type: DELETE_WORKOUT_PLAN,
    payload: workoutPlan
});

const getWorkoutPlan = (workoutPlan) => ({
    type: GET_WORKOUT_PLAN,
    payload: workoutPlan
});

const deleteWorkout = (workout) => ({
    type: DELETE_WORKOUT,
    payload: workout
});

const addWorkout = (workout) => ({
    type: ADD_WORKOUT,
    payload: workout
});


export const getWorkoutsThatBelongToAWorkoutPlan = (workout_planid) => async (dispatch) => {
    const response = await fetch(`/api/my-routine/workoutplans/${workout_planid}/workouts`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getWorkoutPlan(data));
        return data;
    }
}



export default function workoutPlanReducer(state = [], action) {
    switch(action.type){
        case CREATE_WORKOUT_PLAN:
            return action.payload;
        case UPDATE_WORKOUT_PLAN:
            return state.map(workout => workout.id === action.payload.id ? action.payload : workout);
        case DELETE_WORKOUT_PLAN:
            return state.filter(workout => workout.id !== action.payload.id);
        case GET_WORKOUT_PLAN:
            return action.payload;
        case DELETE_WORKOUT:
            return state.map(workout => workout.id === action.payload.id ? action.payload : workout);
        case ADD_WORKOUT:
            return state.map(workout => workout.id === action.payload.id ? action.payload : workout);
        default:
            return state;
    }
}
