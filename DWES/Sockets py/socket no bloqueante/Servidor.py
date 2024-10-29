import socket

server = socket.socket(socket.AF_INET,
                                           socket.SOCK_STREAM)

server.bind(("",65432))
server.listen()
print("Esperando conexion...")

while True:

    socket_cliente, datos_cliente = server.accept()
    print("Conectado", datos_cliente)

    socket_cliente.setblocking(False)
    socket_cliente.settimeout(1)

    seguir = True

    while seguir:
        try:
            peticion = socket_cliente.recv(1000)

        except TimeoutError:
            print("Timeout.Cerramos socket")
            seguir = False

        else:
            print("Recibido", peticion)
