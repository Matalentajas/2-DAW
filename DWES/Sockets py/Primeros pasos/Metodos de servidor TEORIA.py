import socket
serv_socket=socket.socket(socket.AF_INET,socket.SOCK_STREAM,proto=0)
###Metodos de clase no del objeto serv_socket
##print(socket.getaddrinfo("www.pccomponentes.com",
##                              80,
##                              proto=socket.IPPROTO_TCP))
##
##
###Traduce un nombre de host a direccion ip valida
##print(socket.gethostbyname('www.pccomponentes.com'))
###Lo mismo pero da (hostname,aliaslist,ipaddrlist)
##print(socket.gethostbyname_ex('www.pccomponentes.com'))
##
###Retorna una cadena con el hostname del equipo
##print(socket.gethostname())
##
###Retorna hostname a partir de una direccion ipv4
##print(socket.gethostbyaddr("127.0.0.1"))



###Metodos de objeto


print(type(serv_socket))

#Retorna un archivo descriptor del socket. Devuelve un int, y -1 si falla
print(serv_socket.fileno())
serv_socket.bind(('',65432))
serv_socket.listen()

conn,addr=serv_socket.accept()

print("DATOS DESDE EL OBJETO:",serv_socket)

#####Retorna la direccion remota a la que se conecta el socket. HOST,PORT
print("PERNAME_REMOTE:",conn.getpeername())
####
#####Retorna la direccion del propio socket. HOST, PORT
##print("DIRECCION_PROPIA:",conn.getsockname())

##True si es bloqueante el socket, False en caso contrario
print(serv_socket.getblocking())
##Retorna el tiempo de espera en segundos asociado a las operaciones de sockets.
print(serv_socket.gettimeout())

conn.shutdown(socket.SHUT_RDWR)
conn.close()

serv_socket.close()





