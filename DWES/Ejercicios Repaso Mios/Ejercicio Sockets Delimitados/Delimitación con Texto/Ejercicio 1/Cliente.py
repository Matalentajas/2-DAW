import socket

cliente_s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

cliente_s.connect(("localhost", 65432))

# Encapsular el socket en un archivo de texto

socket_file = cliente_s.makefile("rw")

while True:

    msg = input("/")

    socket_file.write(msg + "\n")
    socket_file.flush()

    if msg == "salir":
        break


socket_file.close()
cliente_s.close()
