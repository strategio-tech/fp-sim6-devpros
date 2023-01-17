from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from app.models import Workout_Plan

class WorkoutPlanForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    workout_day = SelectField('workout_day', choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
