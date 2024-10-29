import logging, time
from logging.handlers import RotatingFileHandler
from datetime import datetime

##El RotatingFile bes una excelente manera de manejar archivos de log grandes
##y evitar que se llenen excesivamente

##Creamos el RotatingFileHandler

handler = RotatingFileHandler(
    filename = "log/log_Rotating.out", #Nombre del archivo .log
    maxBytes = 1024,                                #Tamaño maximo del archivo antes de rotar
    backupCount = 3                                #Numero de archivos de respaldo q se crearan
    )

#Creamos el logger principal

logger = logging.getLogger(__name__)    #Nombre del logger basado en el modulo
logger.addHandler(handler)                        #Añadir el manejador al logger
logger.setLevel("DEBUG")                           #Establece el nivel de logging

#Crea mensajes de log en bucle

for _ in range(20):     #Se pone _ en un bucle cuando no se va a usar esa variable
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    st = f"Fecha del debug {current_time}"
    logger.debug(st)    #Registrar mensaje a nivel de DEBUG
