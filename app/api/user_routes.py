from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from itsdangerous import json
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import User, Workout_Plan, db, Add_Workout
from app.forms import WorkoutPlanForm, AddWorkout

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# create a workout plan
@user_routes.route('/<int:id>/workoutplans', methods=['POST'])
# @login_required
def workout_plan(id):
    form = WorkoutPlanForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        current_user = User.query.get(id)
        workout_plan = Workout_Plan(
            name=form.data['name'],
            workout_day=form.data['workout_day'],
            user_id = current_user.id
        )

        db.session.add(workout_plan)
        db.session.commit()
        return workout_plan.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401




# load users workout plans
@user_routes.route('/<int:id>/workoutplans')
# @login_required
def user_workout_plans(id):
    workout_plans = Workout_Plan.query.filter(Workout_Plan.user_id == id).all()
    return jsonify([workout_plan.to_dict() for workout_plan in workout_plans])


# load users workout plan
@user_routes.route('/<int:id>/workoutplans/<int:workout_plan_id>')
# @login_required
def user_workout_plan(id, workout_plan_id):
    user = User.query.get(id)
    workout_plan = Workout_Plan.query.get(workout_plan_id)
    return workout_plan.to_dict()


# add a workout to a workout plan
@user_routes.route('/workoutplans/<int:workout_plan_id>/addworkout', methods=['POST'])
# @login_required
def add_workout(workout_plan_id):
    form = AddWorkout()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        add_workout = Add_Workout(
            bodyPart=form.data['bodyPart'],
            equipment=form.data['equipment'],
            gifUrl=form.data['gifUrl'],
            name= form.data['name'],
            workout_plan_id= workout_plan_id
        )
        db.session.add(add_workout)
        db.session.commit()
        return add_workout.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# delete a workout plan
@user_routes.route('/workoutplans/<int:workout_plan_id>', methods=['DELETE'])
# @login_required
def delete_workout_plan(workout_plan_id):
    workout_plan = Workout_Plan.query.get(workout_plan_id)
    workouts = Add_Workout.query.filter(Add_Workout.workout_plan_id == workout_plan_id).all()
    for workout in workouts:
        db.session.delete(workout)
    db.session.delete(workout_plan)
    db.session.commit()
    return {'message': 'Workout Plan Deleted'}


# delete a workout from a workout plan
@user_routes.route('/workoutplans/<int:workout_plan_id>/workouts/<int:add_workout_id>', methods=['DELETE'])
# @login_required
def delete_workout(workout_plan_id, add_workout_id):
    add_workout = Add_Workout.query.filter_by(workout_plan_id=workout_plan_id, id=add_workout_id).first()
    db.session.delete(add_workout)
    db.session.commit()
    return {'message': 'Workout Deleted'}




# load a workout plans workouts
# @user_routes.route('/<int:id>/workoutplans/<int:workout_plan_id>/workouts')
# # @login_required
# def user_workout_plan_workouts(id, workout_plan_id):
#     add_workouts = Add_Workout.query.filter(Add_Workout.workout_plan_id == workout_plan_id).all()
#     return {'add_workouts': [add_workout.to_dict() for add_workout in add_workouts]}
