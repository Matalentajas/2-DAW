import socket

def server():
    # Crear un socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(('localhost', 65432))
    server_socket.listen(1)
    print("Servidor escuchando...")

    conn, addr = server_socket.accept()
    print(f"Conectado por {addr}")

    while True:
        data = conn.recv(1024)  # Leer hasta 1024 bytes
        if not data:
            break

        # Convertir los bytes recibidos a una cadena
        message = data.decode('utf-8')
        print(f"Recibido: {message}")

    conn.close()

if __name__ == "__main__":
    server()


