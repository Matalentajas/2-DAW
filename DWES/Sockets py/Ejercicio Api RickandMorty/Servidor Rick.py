import socket

import requests

serv_socket = socket.socket(socket.AF_INET,
                                                      socket.SOCK_STREAM,
                                                      proto=0)

serv_socket.bind(("127.0.0.1", 65432))

serv_socket.listen(10)

print("Servidor a la espera de peticiones")

conexion = True
while conexion:

    client_sock, client_addr = serv_socket.accept()
    print("Conexion establecida con:", client_addr)

    data = client_sock.recv(2048)
    consult_page = data.decode("utf-8")

    link = "https://rickandmortyapi.com/api/character/?page="
    link += consult_page
    p = requests.get(link)

    res = p.json()

    lista_personajes = res["results"]

    for i in range(len(lista_personajes)):
        personaje = ("ID: " + str(lista_personajes[i]["id"]) +  " Nombre Personaje:"+ str(lista_personajes[i]["name"]) + " Estado del personaje:" +   str(lista_personajes[i] ["status"]) + "\n")

        client_sock.sendall(personaje.encode("utf-8"))

        


    
