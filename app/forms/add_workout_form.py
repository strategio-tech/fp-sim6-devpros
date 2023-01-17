from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from app.models import Workout_Plan, User, db

class AddWorkout(FlaskForm):
    bodyPart = StringField('bodypart', validators=[DataRequired()])
    equipment = StringField('equipment', validators=[DataRequired()])
    gifUrl = StringField('gifUrl', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
