// here will add all the socket functionalties to the program.
class SocketFactory{
    constructor(port){
        this.port = port; 
        this.socket = null; 
    }
    initiateConnection(){
        this.socket = io.connect(this.port); 
        this.socket.on('connect' , (msg=>{
            console.log(msg); 
            console.log("connection successful");
        }))
    }
    handleUpdates(data){
        //  handles the data from socket.on('updates'); S
    }

    // for the current user.
    handleCreateRoom(){
         this.socket.emit('CreateRoom' , {username : user.username , room : room.name} , (userID)=>{
            user.userID =userID ;  
        });
    }
    handleJoinRoom(){
        console.log(room); 
         this.socket.emit("JoinRoom" , {username : user.username ,room : room.name} , (userID)=>{
            user.userID = userID; 
        });
    }


    //  handeling updates from the socket in server on socket.message
    handleJoinQueueUpdates(data){
        // deal with the data.
    }

    handleLeaveRoomUpdates(data){
        // deal with the data.
    }
    handleStartTalkingUpdates(data){
        // deal with the data
    }
}

let factory = new SocketFactory('http://104.248.183.178/'); 
factory.initiateConnection(); 
factory.socket.on('connect' , ()=>{
    console.log("im connected"); 
})

factory.socket.on('message' , (data)=>{
    console.log('listening' , data);
})

// maps the incoming message to be handled in the factor.
factory.socket.on('message' , (data)=>{
    if(data.type == ENTER_QUEUE_TYPE) {
        factory.handleJoinQueueUpdates(data); 
    } else if(data.type == LEAVE_ROOM_TYPE){
        factory.handleLeaveRoomUpdates(data);
    }
    else{
        console.log('no factory made for this, handle it correctly' , data); 
    }
});

/// exmaple for how the socket factory class shall work.
// let factory = new SocketFactory("http://127.0.0.1:5000/"); 
// factory.initiateConnection(); 
// factory.socket.on('updates' , data =>{
//     factory.handleUpdates(data); 
// })
// socket.on('updates' , (data)=>{
//     console.log(data); 
//     TalkingQueue = data.TalkingQueue; 
//     if(TalkingQueue.length==0){
//         isSomeoneTalking = false; 
//     }
//     else{
//         isSomeoneTalking = true; 
//     }
//     Talker = data.Talker; 
// })

        