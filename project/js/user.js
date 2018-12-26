
class User {
    
    constructor(username ) {
        this.username = username;
        this.room = null ;
        this.userID = null ; 
    } 

    createRoom(roomName){
        //
        $('.welcome-body').hide(); 
        $('.room-body').show(); 
        room = new Room(roomName); 
        $('#navbar-brand').html(roomName);
        factory.handleCreateRoom(); 
    }
    joinRoom(roomName){
        $('.welcome-body').hide(); 
        $('.room-body').show(); 
        room = new Room(roomName);
        $('#navbar-brand').html(roomName);

    }
    leaveRoom(){
        //
    }
    stopTalking(){
        //
    }
    joinQueue(){

    }
}


let ENTER_QUEUE_TYPE = 'enter queue';
let EXIT_QUEUE_TYPE = 'enter queue';
let LEAVE_ROOM_TYPE = 'enter queue';
let ENTER_ROOM_TYPE = 'enter queue';
let STOP_TALKING_TYPE = 'enter queue';
let START_TALKING_TYPE = 'enter queue';
