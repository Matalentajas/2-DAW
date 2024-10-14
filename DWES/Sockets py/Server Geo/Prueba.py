import requests

r = requests.get("http://ip-api.com/json/24.48.0.1") # canada

r = requests.get("http://ip-api.com/json/170.253.53.218") # Valencia

res = r.json()

print(res)
