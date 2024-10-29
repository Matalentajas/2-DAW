import socket

##Crea un socket que escuche en localhost y en un puerto de tu elección.

servidor_s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

servidor_s.bind(("localhost", 65432))

servidor_s.listen()

print("Servidor a la escucha...")

conn, addr = servidor_s.accept()

print("Conexión establecida con:", addr)

##Encapsula el socket en un archivo de texto

socket_file = conn.makefile("rw")

while True:

         msg = socket_file.readline().rstrip("\n")

         if msg == "salir":

             print(addr, ": Cerro la conexión.")
             break

         print(msg)

socket_file.close()
conn.close()
servidor_s.close()

    
    
