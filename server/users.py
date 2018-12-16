
class Room:
    setTime = 1
    def __init__(self, name ):
        self.name = name
        self.queue = list()
    
    def addUser(self , user):
        self.queue.append(user)

  

class User:
    def __init__(self , name , id):
        self.name = name
        self.id = id


