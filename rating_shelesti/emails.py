
from flask.ext.mail import Message
from decorators import async
from rating_shelesti import mail


# ------------------------------------------------------------------------------
@async
def send_async_email(msg):
    mail.send(msg)


# ------------------------------------------------------------------------------
def send_email(subject, sender, recipients, text_body, html_body):
    msg = Message(subject, sender = sender, recipients = recipients)
    msg.body = text_body
    msg.html = html_body
    send_async_email(msg)

