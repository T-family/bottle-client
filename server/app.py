from flask import Flask, render_template 
from flask_socketio import SocketIO , send , Namespace ,join_room, leave_room
from users import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

Rooms = list()
UserList =  list()
TalkingQueue =  list()
RoomList = list()
Talker = ''

if __name__ == '__main__':
    # socketio.run(app)
    # socketio.run()/
    # socketio.run(app , host='0.0.0.0')
    app.run(host='0.0.0.0' , port=4200 , debug=True)
    # bottle = BottleControl('Bottle Room A')


def changeTaler(newTalker):
    if("Talker"):
        Talker = newTalker
    
    return Talker
    


# join room  without being in the talking queue yet. 
# leave room
# permission to talk  
# stop talking (should be already in his turn to talk) 



# join functions

@socketio.on('new user')
def handle_new_user(data):
    socketio.emit('new user' , data['name'])


@socketio.on('request to talk')
def handle_request_to_talk(data):
    print('it came here')
    User = {}    
    TalkingQueue.append(data)
    User['Talker'] = Talker
    User['TalkingQueue'] = TalkingQueue
    socketio.emit('updates' , User)




@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    send(message , broadcast=True)
    




    

@socketio.on("create_room")
def create_room(data):
    roomTemp = Room(data["room"])
    
    userTemp = User(data["username"] , "asadas")
    roomTemp.addUser(userTemp)

    Rooms.append(roomTemp)

    print(Rooms[0].name)

    #sending back to the users that x joined the room ffs!
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', room=room)

@app.route('/')
def hello_world():
   print("amora")
   return 'helllo'