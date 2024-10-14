import socket

HOST = 'localhost'
PORT = 65432

with socket.socket(socket.AF_INET,
                   socket.SOCK_STREAM) as server:

    server.bind((HOST,PORT))
    server.listen()
    print("Esperando conexion.....")

    while True:
        conn, addr = server.accept()
        with conn:
            print("Conexion establecida con:", addr)

            while True:
                data = conn.recv(1024)
                if not data:
                    break
                print("Datos recibidos desde el cliente:{}".format(data.decode("UTF-8")))
                conn.sendall(data)
