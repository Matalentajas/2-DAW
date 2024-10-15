import socket
#Importamos para poder realizar hilos en la conexion y asi poder hacer varias conexiones a la vez
import threading

import random
from colorama import Fore, Style

# Lista de colores
colores = [Fore.RED, Fore.GREEN, Fore.YELLOW, Fore.BLUE, Fore.MAGENTA, Fore.CYAN]

color_usuario = random.choice(colores)

##############################################################

# Diccionario para almacenar los sockets de los clientes y sus nombres
clientes = {}

# Función que manejará a cada cliente conectado
def conexion_cliente(client_socket):
    # Pedir el nombre del cliente al conectarse
    nombre = client_socket.recv(1024).decode('utf-8')
    clientes[client_socket] = nombre  # Guardar el nombre en el diccionario
    print(color_usuario + nombre + " se ha unido al chat." + Style.RESET_ALL)

    # Notificar a todos que este cliente se ha unido
    broadcast((color_usuario + nombre + " se ha unido al chat." + Style.RESET_ALL).encode('utf-8'))

    while True:
        try:
            # Recibir mensajes del cliente
            message = client_socket.recv(1024)
            if not message:
                break
            # Enviar el mensaje a todos los clientes (incluyendo al remitente)
            broadcast(f"{nombre}: {message.decode('utf-8')}".encode('utf-8'))
        except:
            break
    
    # Cuando el cliente se desconecta
    print(f"{nombre} se ha desconectado.")
    broadcast(f"{nombre} ha salido del chat.".encode('utf-8'))
    client_socket.close()
    del clientes[client_socket]  # Eliminar el cliente del diccionario

# Función para enviar un mensaje a todos los clientes conectados
def broadcast(message):
    for client in clientes:
        try:
            client.send(message)
        except:
            client.close()
            del clientes[client]

# Configurar el servidor
HOST = "192.168.1.51"
PORT = 65432

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))
server.listen(5)
print(f"Servidor escuchando en el puerto {PORT}...")

# Aceptar múltiples conexiones
while True:
    client_socket, addr = server.accept()
    print(f"Conexión aceptada de {addr}")

    # Iniciar un hilo para manejar al cliente conectado
    client_thread = threading.Thread(target=conexion_cliente, args=(client_socket,))
    client_thread.start()
