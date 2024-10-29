import socket, time

with socket.socket(socket.AF_INET,
                                   socket.SOCK_STREAM) as client:

    client.connect(("localhost", 65432))

    client_file = client.makefile("rw")

    client_file.write("hola\n")
    client_file.flush()

    line = client_file.readline() .rstrip("\n")
    print(line)

    time.sleep(2)

    client_file.write("adios\n")
    client_file.flush()

    line = client_file.readline() .rstrip("\n")
    print(line)
