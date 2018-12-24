
class User {
    
    constructor(name ) {
        this.name = name;
        this.room = null ;
    } 

    createRoom(roomName){
        //
        $('.welcome-body').hide(); 
        $('.room-body').show(); 
        room = new Room(roomName); 
    }
    joinRoom(roomName){
        $('.welcome-body').hide(); 
        $('.room-body').show(); 
        room = new Room(roomName); 
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