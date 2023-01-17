from .db import db

class Add_Workout(db.Model):
    __tablename__ = 'add_workouts'

    id = db.Column(db.Integer, primary_key=True)
    bodyPart = db.Column(db.String(255), nullable=False)
    equipment = db.Column(db.String(255), nullable=False)
    gifUrl = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)

    workout_plan_id = db.Column(db.Integer, db.ForeignKey('workout_plans.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'bodyPart': self.bodyPart,
            'equipment': self.equipment,
            'gifUrl': self.gifUrl,
            'name': self.name,
            'workout_plan_id': self.workout_plan_id,
        }
