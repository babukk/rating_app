from rating_shelesti import db
from .model import Model

class Rating(Model):
    __url__ = 'rating'

    adv_type = db.Column(db.Integer)
    name = db.Column(db.String(80))
    address = db.Column(db.String(120))
    email = db.Column(db.String(60))
    phone = db.Column(db.String(30))
    description = db.Column(db.String(2000))

