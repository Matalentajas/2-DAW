import socket

serv_socket = socket.socket(socket.AF_INET,
                            socket.SOCK.STREAM,
                            proto = 0)
print(type(serv_socket))

#Retorna un archivo descriptor del socket. -1 si falla.
print(serv_socket.fileno())

#Retorna la direccion remota a la que se conecta el socket. HOST, PORT
print(serv_socket.getpeername)

#Retornla la direccion del propio socket. HOST, PORT
print(serv_socket.getsockname())
