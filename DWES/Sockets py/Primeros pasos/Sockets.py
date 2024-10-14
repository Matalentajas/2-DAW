##echo server socket
import socket

HOST='192.168.1.161' #Standar Loopback interface address
PORT=65432   #Port to listen on (non-privilegied ports are >=103)

with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s:
    s.bind((HOST,PORT))
    s.listen()
    print("Waiting connections....")

    conn, addr=s.accept()#conn es un nuevo socket para comunicar con el cliente
    with conn:
        print("Connected by",addr)
        print("Soy el servidor de la conexion",str(conn))

        while True:
            data=conn.recv(1024)
            if not data:
                break
            print("Datos recibidos desde el cliente:{}".format(data.decode("UTF-8")))
            conn.sendall(data)
