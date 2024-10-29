import socket

def client():
    # Crear un socket
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect(('localhost', 65432))

    # Convertir la cadena a bytes
    message = "Hola".encode('utf-8')

    # Enviar el mensaje
    client_socket.sendall(message)
    
    client_socket.close()

if __name__ == "__main__":
    client()
