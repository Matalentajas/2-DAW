import socket
import threading
import random
from colorama import Fore, Style

# Lista de colores
colores = [Fore.RED, Fore.GREEN, Fore.YELLOW, Fore.BLUE, Fore.MAGENTA, Fore.CYAN]

color_usuario = random.choice(colores)

# Función para recibir mensajes del servidor
def receive_messages(client_socket):
    while True:
        try:
            message = client_socket.recv(1024).decode('utf-8')
            if message:
                print(message)
        except:
            print("Error recibiendo mensaje")
            client_socket.close()
            break
        
HOST = "192.168.1.51"
PORT = 65432

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((HOST, PORT))

# Hilo para recibir mensajes
receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
receive_thread.start()

# Enviar nombre de usuario al servidor
nombre = input(color_usuario + "Ingresa tu nombre: " + Style.RESET_ALL)
client_socket.send(nombre.encode('utf-8'))

# Enviar mensajes al chat
while True:
    message = input()
    client_socket.send(message.encode('utf-8'))

