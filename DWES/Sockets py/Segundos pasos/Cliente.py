import socket

HOST='192.168.1.34'
PORT=65432

msg1="PSOE TRAIDOR"


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as c:

    c.connect((HOST,PORT))
    c.sendall(msg1.encode('UTF-8'))

    data=c.recv(1024)
print("Received from server:",data.decode('UTF-8'))

