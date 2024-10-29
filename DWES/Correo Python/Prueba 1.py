import smtplib, ssl
import getpass

port = 465

password = "awqm stxp mcoi dmms"

sender_mail = "arturotest1305@gmail.com"
receiver_mail = "arturotest1305@gmail.com"
server_domain = "smtp.gmail.com"


msg = """ Subject: Hola mundo



Este es un mensaje de prueba todo OK!! """


context = ssl.create_default_context()

with smtplib.SMTP_SSL(server_domain, port, context=context) as s :


    s.login(sender_mail, password)
    s.sendmail(sender_mail, receiver_mail, msg)

print("Mail enviado de forma correcta")

