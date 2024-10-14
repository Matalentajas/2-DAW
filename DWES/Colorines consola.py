from colorama import just_fix_windows_console

just_fix_windows_console()

from colorama import Fore, Back, Style

print(Fore.BLUE + "some blue text")
print(Back.RED + "and with a green background")
print(Style.DIM + "and in dim style")
print(Style.RESET_ALL)
print("back to the normal now")
