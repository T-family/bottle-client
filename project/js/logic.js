
let user = null; 
let room = null; 
let welcome = ()=>{
    $('.room-body').hide(); 
    $('.welcome-body').show(); 

    user = new User(prompt("What is your name nigga?!!"));    
    // user.createRoom("el donya zy el morge7a yoym t7t w youm fo2");

    // room.initiateRoom(null); 
}

$(document).ready(()=>{
    welcome(); 
    // console.log(factory); 
})
$(window).on("load", ()=>{

})

function clickTest(){
    $('.welcome-body').hide(); 

    $('.room-body').show(); 
}

function createRoomOnClick(){
    let roomName = prompt('enter room name');
    console.log(roomName); 
    user.createRoom(roomName); 
}

function joinRoomOnClick() { 
    let roomName = prompt("enter room name"); 
    user.joinRoom(roomName); 
 }