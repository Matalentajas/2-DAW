import socket, select

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server.setblocking(False)

server.bind(("", 65432))
server.listen()

inputs = [server] #lista de sockets de los q esperamos mensajes.
outputs = [] #lista de sockets por los que queremos enviar mensajes
output_messages = {}

##print("Esperando conexion...")

while True:

    readables, writables, exceptions = select.select(inputs, outputs, inputs)

    for socket in readables:
        if socket is server:
            print("Aceptando clientes")
            client, client_data = server.accept()
            client.setblocking(False)
            inputs.append(client)

        else:
            message = socket.recv(2048).decode()
            if message == "hola":
                 output_messages[socket] = "Pues hola carcola"
                 outputs.append(socket)

            if message == "adios":
                 output_messages[socket] = "Pues chao"
                 outputs.append(socket)

            if message == "":
                inputs.remove(socket)
                socket.close

    for socket in writables:
        socket.send(output_messages[socket].encode())
        outputs.remove(socket)


