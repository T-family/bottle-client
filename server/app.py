from flask import Flask, render_template 
from flask_socketio import SocketIO , send , Namespace ,join_room, leave_room
from users import *
from threading import Timer



# join room  without being in the talking queue yet. 
# leave room
# permission to talk  
# stop talking (should be already in his turn to talk) 





# necessary startup code 
app = Flask(__name__)
app.config['SECRET_KEY'] = 'no-wifi-1234' #idk 
socketio = SocketIO(app)
# declared lists to be used as long as the server is up.
Rooms = dict()


if __name__ == '__main__':
    socketio.run(app)    

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    send(message , broadcast=True)

@socketio.on('testme')
def tt(data):
    print('tt called')
    return 1   

@socketio.on('connect')
def test():
    print('connected from client')

@socketio.on("CreateRoom")
def create_room(data):
    newRoom = Room(data["room"])
    newUser = User(data["username"])
    Rooms[newRoom.name] = newRoom
    #addUser assigns a new id for the user and maps it to the name and returns the assigned id back to the user to use
    AssignedID = newRoom.addUser(newUser)
    print("created room with name :",newRoom)
    join_room(newRoom.name)
    print("{0} joined room".format(newUser.name))
    send(newUser.name + ' has entered the room.', room=newRoom.name)
    return AssignedID

@socketio.on("JoinRoom")
def add_user_to_room(data):
    choosenRoom = Rooms[data["room"]]
    userObject = User(data["username"])
    AssignedID = choosenRoom.addUser(userObject)
    join_room(data["room"])
    print("{0} has joined the room".format(data["username"]))
    send(data["username"] + ' has entered the room.',room= data["room"])
    return AssignedID

@socketio.on("LeaveRoom")
def remove_user_from_room(data):
    leave_room(data["room"])
    send(data["username"] + ' has left the room.',room= data["room"])

def nextUser(roomName):
    room=Rooms[roomName]
    room.talker=''
    if len(room.queue)>0:
        UserToTalk = room.queue[0].name
        userToTalkID = room.queue[0].id
        del room.queue[0]
        room.talker = UserToTalk
        print("{0} started talking for 10 secs".format(room.talker))
        queueTimer = Timer(10 , nextUser,roomName)
        queueTimer.start()
        room.talkerThread = queueTimer
    else:
        return

@socketio.on("JoinQueue")
def JoinQueue(data):
    roomName = data["room"]
    room=Rooms[roomName]
    
    #Whenever there is no one in
    if len(room.queue)==0 and room.talker =='':
        room.talker = data["username"]
        queueTimer = Timer(10 , nextUser,roomName)
        print("{0} started talking for 10 secs".format(room.talker))
        queueTimer.start()
        room.talkerThread = queueTimer
    else:
        userObject = User(data["username"])
        userObject.setID(data["userID"])
        room.queue.append(userObject)
        print("{0} is added to queue".format(data["username"]))


@socketio.on("leaveQueue")
def leaveQueue(data):
    userObject = User(data["username"])
    userObject.setID(data["userid"])


@socketio.on("StopTalking")
def StopTalking(data):
    roomName = data["room"]
    choosenRoom = Rooms[roomName]
    choosenRoom.talkerThread.cancel()
    nextUser(roomName)


# @socketio.on("LeaveQueue")
# def JoinQueue(data):

# @socketio.on("StopTaking")
# def StopTaking(data)

# @app.route("return_avaialble_rooms")
# def return_available_rooms():
#     return Rooms
        