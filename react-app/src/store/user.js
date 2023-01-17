const CREATE = 'userWorkoutPlans/CREATE';
const DELETE = 'userWorkoutPlans/DELETE';
const DELETEWORKOUT = 'userWorkoutPlans/DELETEWORKOUT';
const ADDWORKOUTTOPLAN = 'userWorkoutPlans/ADDWORKOUTTOPLAN';
const LOAD_USER_WORKOUT_PLAN = 'user/LOAD_USER_WORKOUT_PLAN';
const LOAD_USER_WORKOUT_PLANS = 'user/LOAD_USER_WORKOUT_PLANS';


const createWorkoutPlan = (userWorkoutPlan) => ({
    type: CREATE,
    userWorkoutPlan
});

const deleteWorkoutPlan = (userWorkoutPlan) => ({
    type: DELETE,
    userWorkoutPlan
});

const deleteWorkoutFromPlan = (userWorkoutPlan) => ({
    type: DELETEWORKOUT,
    userWorkoutPlan
});

const addWorkoutToPlan = (userWorkoutPlan) => ({
    type: ADDWORKOUTTOPLAN,
    userWorkoutPlan
});


const loadUserWorkoutPlans = (userWorkoutPlans) => ({
    type: LOAD_USER_WORKOUT_PLANS,
    userWorkoutPlans,
});

const loadUserWorkoutPlan = (userWorkoutPlan) => ({
    type: LOAD_USER_WORKOUT_PLAN,
    userWorkoutPlan,
});


export const createWorkOutPlan = (payload) => async (dispatch) => {

    const response = await fetch(`/api/users/${payload.user_id}/workoutplans`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createWorkoutPlan(data));
        return data;
    }
};


export const deleteAworkoutPlan = (payload) => async (dispatch) => {
    const respone = await fetch(`/api/users/workoutplans/${payload}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    if (respone.ok) {
        const data = await respone.json();
        dispatch(deleteWorkoutPlan(data));
        return data;
    }
}


export const deleteAWorkoutFromAPlan = (payload) => async (dispatch) => {
    const respone = await fetch(`/api/users/workoutplans/${payload.workout_plan_id}/workouts/${payload.workout_id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    if (respone.ok) {
        const data = await respone.json();
        dispatch(deleteWorkoutFromPlan(data));
        return data;
    }
}

export const loadAUsersWorkoutPlans = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/workoutplans`);

    if (response.ok) {
        const data = await response.json();
        dispatch(loadUserWorkoutPlans(data));
        return data;
    }

}


export const loadAUsersWorkoutPlan = (id, workout_plan_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/workoutplans/${workout_plan_id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(loadUserWorkoutPlan(data));
        return data;
    }
}

export const addWorkoutToWorkoutPlan = (payload) => async (dispatch) => {
    console.log(payload)
    const response = await fetch(`/api/users/workoutplans/${payload.workout_plan_id}/addworkout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(addWorkoutToPlan(payload.workout_plan_id));
        return data;
    }
}



export default function userReducer (state = [], action){
    switch(action.type){
        case CREATE:
            return [...state, action.userWorkoutPlan];
        case DELETE:
            return state.filter((userWorkoutPlan) => userWorkoutPlan.id !== action.userWorkoutPlan.id);
        case LOAD_USER_WORKOUT_PLANS:
            return action.userWorkoutPlans;
        case LOAD_USER_WORKOUT_PLAN:
            return action.userWorkoutPlan;
        case ADDWORKOUTTOPLAN:
            return state.map((userWorkoutPlan) => {
                if (userWorkoutPlan.id === action.userWorkoutPlan.id) {
                    return action.userWorkoutPlan;
                }
                return userWorkoutPlan;
            });
        default:
            return state;
    }
}
