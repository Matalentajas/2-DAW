import socket

HOST = "localhost"
PORT = 65432
buffersize = 4092

s_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s_socket.bind((HOST,PORT))

s_socket.listen()

print(HOST, "a la escucha en:", PORT)

while True:
    
    conn, addr = s_socket.accept()

    print("Conexion establecida con", addr)

    msg_cliente = conn.recv(buffersize)

    if msg_cliente.decode().lower() != "cerrar":

        print("-", msg_cliente.decode("utf-8"))

        msg_servidor = input("-")

        conn.send(msg_servidor.encode("utf-8"))

    else:
        conn.close()  # Cerrar la conexión con el cliente
        break

# Aquí se cierra el socket del servidor
s_socket.close()
print("Servidor cerrado.")

