from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import User, Workout_Plan, Add_Workout, db
from app.forms import WorkoutPlanForm

workout_plan_routes = Blueprint('my-routine', __name__)


# get all of the workouts that belong to a workout plan
@workout_plan_routes.route('/workoutplans/<int:workout_plan_id>/workouts')
# @login_required
def workout_plan_workouts(workout_plan_id):
    workout_plan_workouts = Add_Workout.query.filter(Add_Workout.workout_plan_id == workout_plan_id).all()
    return jsonify([workout_plan_workout.to_dict() for workout_plan_workout in workout_plan_workouts])




# # get all of a users workout plans
# @workout_plan_routes.route('/<int:id>')
# # @login_required
# def get_workout_plans(id):
#     user = User.query.get(id)
#     workout_plans = Workout_Plan.query.filter(Workout_Plan.user_id == id).all()
#     return {'workout_plans': [workout_plan.to_dict() for workout_plan in workout_plans]}


# # get a single workout plan
# @workout_plan_routes.route('/<int:id>/<int:workout_plan_id>')
# # @login_required
# def get_workout_plan(id, workout_plan_id):
#     workout_plan = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.id == workout_plan_id).first()
#     return workout_plan.to_dict()


# # create a workout plan
# @workout_plan_routes.route('/<int:id>', methods=['POST'])
# # @login_required
# def create_workout_plan(id):
#     form = WorkoutPlanForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         workout_plan = Workout_Plan(
#             name=form.data['name'],
#             user_id=id,
#             workout_gif=form.data['workout_gif'],
#             workout_day=form.data['workout_day'],
#             body_part=form.data['body_part']
#         )
#         db.session.add(workout_plan)
#         db.session.commit()
#         return workout_plan.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# # delete a workout plan
# @workout_plan_routes.route('/<int:id>/<int:workout_plan_id>', methods=['DELETE'])
# # @login_required
# def delete_workout_plan(id, workout_plan_id):
#     workout_plan = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.id == workout_plan_id).first()
#     db.session.delete(workout_plan)
#     db.session.commit()
#     return {'message': 'Workout plan deleted'}


# # edit a workout plan
# @workout_plan_routes.route('/<int:id>/<int:workout_plan_id>', methods=['PUT'])
# # @login_required
# def edit_workout_plan(id, workout_plan_id):
#     workout_plan = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.id == workout_plan_id).first()
#     form = WorkoutPlanForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         workout_plan.name = form.data['name']
#         workout_plan.workout_gif = form.data['workout_gif']
#         workout_plan.workout_day = form.data['workout_day']
#         workout_plan.body_part = form.data['body_part']
#         db.session.commit()
#         return workout_plan.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# # filter workout plans by day
# @workout_plan_routes.route('/<int:id>/day/<string:workout_day>')
# # @login_required
# def get_workout_plan_by_day(id, workout_day):
#     workout_plans = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.workout_day == workout_day).all()
#     return {'workout_plans': [workout_plan.to_dict() for workout_plan in workout_plans]}


# # filter workout plans by body part
# @workout_plan_routes.route('/<int:id>/body/<string:body_part>')
# # @login_required
# def get_workout_plan_by_body_part(id, body_part):
#     workout_plans = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.body_part == body_part).all()
#     return {'workout_plans': [workout_plan.to_dict() for workout_plan in workout_plans]}


# # add a workout to a workout plan
# @workout_plan_routes.route('/<int:id>/<int:workout_plan_id>/add/<int:workout_id>', methods=['POST'])
# # @login_required
# def add_workout_to_workout_plan(id, workout_plan_id, workout_id):
#     workout_plan = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.id == workout_plan_id).first()
#     workout_plan.workouts.append(workout_id)
#     db.session.commit()
#     return workout_plan.to_dict()


# # remove a workout from a workout plan
# @workout_plan_routes.route('/<int:id>/<int:workout_plan_id>/remove/<int:workout_id>', methods=['DELETE'])
# # @login_required
# def remove_workout_from_workout_plan(id, workout_plan_id, workout_id):
#     workout_plan = Workout_Plan.query.filter(Workout_Plan.user_id == id, Workout_Plan.id == workout_plan_id).first()
#     workout_plan.workouts.remove(workout_id)
#     db.session.commit()
#     return workout_plan.to_dict()
