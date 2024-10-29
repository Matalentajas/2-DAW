import logging, time
from logging.handlers import RotatingFileHandler

#Filename - Required
#mode - "a" default
#maxBytes - Maximum Size of the log before a "rotation" occurse
#encoding - Enconding, system default
#delay - Use to delay creation until a write occurse
#backupCount - How many log files to keep



handler = RotatingFileHandler(filename = "logs/log.out",
                                                          maxBytes=1024,
                                                          backupCount=3)

logger = logging.getLogger(__name__)
logger.addHandler(handler)
logger.setLevel("DEBUG")

for _ in range (20):

    st = "The time is now {}".format(time.time())
    logger.debug(st)
