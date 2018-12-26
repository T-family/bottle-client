class Room{
    constructor(name){
        this.users = []; 
        this.name= name; 
        this.talkingUser= null; 
    }
    createRoom(){
        //
    }
    initiateRoom(users){
        console.log("initiating room");
        if(users)
            this.users = users;
        $('.navbar-brand').text(this.name); 
    }
    // removing user from the room.
    removeUser(name){
        $('.queue ul > li').each(()=>{
            if($(this).text() ==name){
                $(this).addClass("bounceOutLeft animated"); 
                $(this).remove(); 
            }
        });
    }
    // adding new user to bottom of the room.
    addUser(name){
            var queue  = document.getElementById("queue"); 
            var node = document.createElement("LI");   
            node.className = "list-group-item list-group-item-success animated bounceInLeft"; 
            node.textContent = name; 
            queue.appendChild(node); 
    }
}