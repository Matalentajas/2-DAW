import socket 

HOST = "localhost"
PORT = 65432

##Indicamos cuanto queremos q pese cada paquete.

buffersize = 4092

##Indicamos q el socket sera UDP

s_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s_socket.bind((HOST, PORT))

print("Escuchando en el puerto: ", PORT)

##Creamos un bucle para que todo el rato este en escucha.

while True:   
##Obtenemos el mensaje y la dirección del cliente.
    msg, addr = s_socket.recvfrom(buffersize)
    
    if msg.decode("utf-8").lower() != "cerrar":
        print(addr, ":", msg.decode("utf-8"))
        ##Le enviamos al cliente nuestro mensaje.
        respuesta = input("- ")
        s_socket.sendto(respuesta.encode("utf-8"), addr)
    else:
        break
            

print("Cerrando conexión con:", addr)
s_socket.close()

        
