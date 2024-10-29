import socket

HOST = "localhost"
PORT = 65432
buffersize = 4096

c_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    
    msg_client = input("-")

    c_socket.sendto(msg_client.encode(), (HOST, PORT))

    data, addr = c_socket.recvfrom(buffersize)

    print("/", data.decode(), ":", addr)
