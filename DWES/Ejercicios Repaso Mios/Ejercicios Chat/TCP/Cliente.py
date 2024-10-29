import socket

HOST = "localhost"
PORT = 65432
buffersize = 4092

c_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

c_socket.connect((HOST, PORT))

while True:

    msg_cliente = input("-")

    c_socket.send(msg_cliente.encode("utf-8"))

    msg_servidor = c_socket.recv(buffersize)

    print("-", msg_servidor.decode("utf-8"))
