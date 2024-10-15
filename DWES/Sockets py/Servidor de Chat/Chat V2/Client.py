import socket

HOST = "localhost"

PORT = 65432

c_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

msg = input("-")

c_socket.sendto(msg.encode(), (HOST, PORT))

respose, server_address = c_socket.recvfrom(1024)

print("--")
