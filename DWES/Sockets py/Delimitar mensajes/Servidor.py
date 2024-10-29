import socket, time
with socket.socket(socket.AF_INET,
                                   socket.SOCK_STREAM) as server:

    server.bind(("localhost", 65432))
    server.listen()
    print("Esperando clientes...")

    while True:

        socket_cliente, datos_cliente = server.accept()
        
        with socket_cliente:

            print("Conexion exitosa", datos_cliente)

            seguir = True

            socket_file = socket_cliente.makefile("rw")

            while seguir:

                line = socket_file.readline().rstrip("\n")
                print("Recibido", line)

                if line == "hola":

                    print(str(datos_cliente), "envia hola: contesta caracola")

                    socket_file.write("Hola caracola \n")
                    socket_file.flush()

                if line == "adios":

                    socket_file.write("Adios \n")
                    socket_file.flush()
                    socket_cliente.close()
                    print("Desconectado", datos_cliente)

                    seguir = False
                    
                    
                    
