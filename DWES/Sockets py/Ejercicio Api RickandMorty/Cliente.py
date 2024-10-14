import socket

client_sock = socket.socket(socket.AF_INET,
                            socket.SOCK_STREAM)

client_sock.connect(("127.0.0.1", 65432))

while True:

    data = client_sock.recv(2048)
    if not data:
        break
    print(data.decode("utf-8"))

        answer = input("¿Desea realizar otra búsqueda?: ")
        answer = answer.lower()

        if answer = "si":

            page = input("¿Que pagina desea listar?: ")

            if consult_page.isdigit() and 1 <= int(consult_page) <= 42:

                client_sock.sendall(b"40")
            else:
                print("Ingresa un número por favor entre 1 y 42")

        else:
            #Cerrar conexion
