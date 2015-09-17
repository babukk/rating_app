import flask
import flask.ext.sqlalchemy
from flask.ext.mail import Mail
import config

app = flask.Flask(__name__)
app.config.from_object(config)
db = flask.ext.sqlalchemy.SQLAlchemy(app)
mail = Mail(app)

import core
import user
import rating

db.create_all()

# Create admim user if not exists
user.User.new_user(u'admin@shelesti.ru', u'admin')
user.User.new_user(u'vasya@mail.ru', u'pupkin')


