import socket

HOST = "localhost"
PORT = 65432
buffersize = 4096

s_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

s_socket.bind((HOST, PORT))

print("Servidor a la escucha en", HOST, ":", PORT)

while True:

    data, addr = s_socket.recvfrom(buffersize)

    print("/", data.decode(),":", addr)

    msg = input("-")
    s_socket.sendto(msg.encode(), addr)
