// here will add all the socket functionalties to the program.
class SocketFactory{
    constructor(port){
        this.port = port; 
        this.socket = null; 
    }
    initiateConnection(){
        this.socket = io.connect(port); 
        socket.on('connect' , (msg=>{
            console.log(msg); 
            console.log("connection successful");
        }))
    }
    handleUpdates(data){
        //  handles the data from socket.on('updates'); S
    }
    
}

let factory = new SocketFactory('whatever man'); 

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

        