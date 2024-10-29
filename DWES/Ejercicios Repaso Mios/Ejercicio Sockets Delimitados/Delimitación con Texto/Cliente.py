import socket

socket_c = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket_c.connect(("localhost",65432))

socket_file = socket_c.makefile("rw")

list_msg = ["Hola como estas", "Me gusta", "salir"]

for msg in list_msg:
    socket_file.write(msg + "\n") # Escribimos el mensaje con un salto de línea 
    socket_file.flush()  # Forzamos el envío del mensaje inmediatamente
    print("Mensaje enviado:", msg)

socket_file.close()
socket_c.close()
