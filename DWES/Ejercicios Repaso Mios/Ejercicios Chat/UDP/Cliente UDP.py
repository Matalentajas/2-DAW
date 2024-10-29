import socket

HOST = "localhost"
PORT = 65432
buffersize = 4092

c_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    
    # Enviar mensaje al servidor
    msg = input("- ")
    c_socket.sendto(msg.encode("utf-8"), (HOST, PORT))  

    # Recibir respuesta del servidor
    respuesta, addr = c_socket.recvfrom(buffersize)
    print("Respuesta del servidor:", respuesta.decode("utf-8"))
