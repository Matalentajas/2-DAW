import socket
import struct

multicast_group = ('224.0.0.1', 10000)  # Dirección multicast y puerto
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP,
                struct.pack("4sl", socket.inet_aton(multicast_group[0]), socket.INADDR_ANY))

while True:
    data, address = sock.recvfrom(1024)  # Tamaño del buffer
    print(f'Received {data} from {address}')
