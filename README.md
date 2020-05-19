# tindev-backend
Backend of Tindev the node project of Semana Omnistack 8.

## endpoints:

### GET
#### \<server\>:3333/
**Headers _{ user: user.\_id}_**
_user._id is the id of the logged user_

###### **Returns** a list of avaiable devs to be liked,

**When no user header are send**
###### **Returns** a list of all devs ids.
  
### POST
#### \<server\>:3333/devs/new

**dev = _{ "username": "user-name-on-github" }_**
###### Receives a **dev** to add at the database.

#### \<server\>:3333/devs/**:devId**/like
**Headers _{ user: user.\_id}_**
_user._id is the id of the logged user_

###### Likes the dev with the **devId**.

#### \<server\>:3333/devs/**:devId**/dislike
**Headers _{ user: user.\_id}_**
_user._id is the id of the logged user_

###### Dislikes the dev with the **devId**.