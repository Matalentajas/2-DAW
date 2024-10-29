import socket

socket_s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

socket_s.bind(("localhost", 65432))

socket_s.listen()

print("Servidor a la espera de conexiones...")

##Aceptamos la conexion.

socket_c, addr = socket_s.accept()

print("Conexión establecida con :", addr)

### Convertimos el socket en un archivo de texto

socket_file = socket_c.makefile("rw")

##Ahora, configuraremos el servidor para que pueda recibir mensajes delimitados por un salto de línea (\n).
##Vamos a usar readline() para esperar hasta que llegue un mensaje completo.

while True:
    ## Leer una línea completa (delimitada por '\n')

    msg = socket_file.readline().rstrip("\n") # Eliminamos el '\n' al final

    if msg == "salir":
        print("El cliente ha cerrado la conexión")
        break

    print("-", msg)

socket_file.close()
socket_c.close()
socket_s.close()
print("Servidor cerrado")
