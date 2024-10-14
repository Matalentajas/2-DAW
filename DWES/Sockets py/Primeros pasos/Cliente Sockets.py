#echo client socket
import socket

HOST='127.0.0.1' #The server´s hostname or IP adress
PORT=65432       #The port used by the server

msg="Hola mundo desde mi oprimer socket en Python"

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as c:

    c.connect((HOST,PORT))
    c.sendall(msg.encode('UTF-8'))

    data=c.recv(1024)
print("Received from server:",data.decode('UTF-8'))
