import requests

cont = "si"

while cont == "si":

    consult_page = input("¿Que pagina desea consultar?: ")

    if consult_page.isdigit() and 1 <= int(consult_page) <= 42:
    
        p = requests.get(f"https://rickandmortyapi.com/api/character/?page={consult_page}")

        res = p.json()

        lista_personajes = res["results"]

        for i in range(len(lista_personajes)):
            print("ID: ", lista_personajes[i]["id"], "Nombre Personaje:", lista_personajes[i]["name"],"Estado del personaje:",  lista_personajes[i] ["status"])

        cont = input("¿Desea realizar otra búsqueda?: ")
        cont = cont.lower()
    else:

         print("Ingresa un número por favor entre 1 y 42")


        
