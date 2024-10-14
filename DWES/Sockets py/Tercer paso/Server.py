import socket

serv_socket = socket.socket(socket.AF_INET,
                            socket.SOCK_STREAM,
                            proto=0)

serv_socket.bind(("192.168.1.64", 65432))

serv_socket.listen(10)
print("Escuchando en puerto 65432")

conexion = True
while conexion:

    client_sock, client_addr = serv_socket.accept()
    print("New connection from", client_addr)

    chunks = []
    while True:
        data = client_sock.recv(2048)
        palabra = data.decode().lower()

        if palabra == "cerrar":
            print("Closing connection")
            serv_socket.close()

            conexion = False

            break
        elif not data:
            break

        chunks.append(data)
    client_sock.sendall(b"".join(chunks))
    client_sock.close()







            
