# tindev-backend
Backend of Tindev the node project of Semana Omnistack 8.

endpoints:

# GET
# <server>:3333/
Returns a list of avaiable devs
  
# POST
# <server>:3333/devs
Receives a dev to add at the database.
dev = { "username": "user-name-on-github" }
