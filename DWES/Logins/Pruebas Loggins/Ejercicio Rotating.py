##Vamos a trabajar en el Ejercicio 1: Logger con Varios Niveles.
#En este ejercicio, crearás un logger que registre mensajes en diferentes niveles (DEBUG, INFO, WARNING, ERROR, y CRITICAL)
#y cada nivel se guardará en un archivo diferente.

import logging
from logging.handlers import RotatingFileHandler

#Vamos a crear un Rotating por cada uno de los niveles.

debug_handler = RotatingFileHandler("log/debug.log",
                                    maxBytes=1024,
                                    backupCount = 2)

info_handler = RotatingFileHandler("log/info.log",
                                   maxBytes=1024,
                                   backupCount = 2)

warning_handler = RotatingFileHandler("log/warning.log",
                                      maxBytes = 1024,
                                      backupCount = 2)

error_handler = RotatingFileHandler("log/error.log",
                                    maxBytes = 1024,
                                    backupCount = 2)

critical_handler = RotatingFileHandler("log/critical.log",
                                        maxBytes=1024,
                                        backupCount=2)


#Creamos el logger

logger = logging.getLogger(__name__)

#Configuramos niveles de cada handler

debug_handler.setLevel(logging.DEBUG)

info_handler.setLevel(loggign.INFO)

warning_handler.setLevel(logging.WARNING)

error_handler.setLevel(logging.ERROR)

critical_handler.setLevel(logging.CRITICAL)

#Añadir los manejadores al logger

logger.addHandler(debug_handler)

logger.addHandler(info_handler)

logger.addHandler(warning_handler)

logger.addHandler(error_handler)

logger.addHandler(critical_handler)

#Ahora vamos a poner los mensajes a cada uno de los handler

logger.debug("Este es un mensaje de depuración (DEBUG)")

logger.info("Este es un mensaje informativo (INFO)")

logger.warning("Este es un mensaje de advertencia (WARNING)")

logger.error("Este es un mensaje de error (ERROR)")

logger.critical("Este es un mensaje crítico (CRITICAL)")
