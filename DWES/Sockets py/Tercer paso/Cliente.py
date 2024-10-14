import socket

client_sock = socket.socket(socket.AF_INET,
                            socket.SOCK_STREAM)
client_sock.connect(("127.0.0.1", 65432))

client_sock.sendall(b"cerrar")
client_sock.shutdown(socket.SHUT_WR)

chunks = []

while True:

    data = client_sock.recv(2048)
    if not data:
        break
    chunks.append(data)
print("Recieved:",b"".join(chunks).decode())
client_sock.close()
