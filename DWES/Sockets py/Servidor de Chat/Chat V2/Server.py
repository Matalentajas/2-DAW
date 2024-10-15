import socket

HOST = "localhost"
PORT = 65432
buffersize = 4096

s_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

s_socket.bind((HOST,PORT))

print(f"Servidor esperando a la conexión de clientes en {HOST}:{PORT}")

while True:

    data, addr = s_socket.recvfrom(buffersize)
    
    print("Mensaje del cliente: ", data.decode(), "enviado por ", addr )

    msg = input("-")
    sock.sendto(msg.encode(),addr)
