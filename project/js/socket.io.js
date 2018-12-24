   
        var socket = io.connect('http://127.0.0.1:5000/');
        // http://192.168.1.12:5000 , http://127.0.0.1:5000/
         socket.on('connect', (msg)=>{
            console.log(socket.id); 
            socket.send('sending to the server, did you hear me ?'); 
            user['name'] = 'amr mohamed ' +Math.floor(Math.random()*100);
            user['id'] = socket.id;
            user['AmITalking'] = false; 

            console.log(user);
        })


        socket.on('updates' , (data)=>{
            console.log(data); 
            TalkingQueue = data.TalkingQueue; 
            if(TalkingQueue.length==0){
                isSomeoneTalking = false; 
            }
            else{
                isSomeoneTalking = true; 
            }
            Talker = data.Talker; 
        })

        function IWantToTalk(){
            console.log(user); 
            socket.emit('request to talk' , user); 
        }
        function joinRoom(){
            socket.emit('new user' , user); 
        }

        socket.on('new user', (data)=>{
            console.log(data); 
            alert(data); 
        })

        
        const joinTest = function () {  
            console.log('sending'); 
           socket.emit("create_room" , {room: "CCroom" , username: "amr Taher"}); 
        }
        
     

