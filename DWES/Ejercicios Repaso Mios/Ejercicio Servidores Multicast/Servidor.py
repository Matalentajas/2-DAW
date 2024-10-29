##La programación con sockets multicast es muy útil para aplicaciones donde un
##solo mensaje necesita ser enviado a múltiples receptores,
##como en la transmisión de video o audio en tiempo real.

import socket
import time

# Dirección multicast y puerto
grupo_multicast = ("224.0.0.1", 10000)

# Crear socket UDP
s_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Configurar para permitir el envío de multicast
s_socket.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, 2)  # 2 es el TTL

# Enviar mensajes multicast
while True:
    message = b'This is a multicast message'
    s_socket.sendto(message, grupo_multicast)
    print(f"Mensaje enviado: {message.decode()}")
    time.sleep(1)  # Enviar un mensaje cada segundo

