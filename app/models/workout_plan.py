from .db import db


class Workout_Plan(db.Model):
    __tablename__ = 'workout_plans'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    workout_day = db.Column(db.String(40), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    users = db.relationship('User', back_populates='workout_plans')

    add_workout_id = db.relationship('Add_Workout', backref='workout_plan', lazy=True)


    def to_dict(self):
        # print(self.users)
        return {
            'id': self.id,
            'name': self.name,
            'workout_day': self.workout_day,
            # 'user_id': [user.to_dict() for user in self.users]
            # 'user_id': self.users
        }
