    let user = {}; 
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
            
        let isSomeoneTalking = false; 
        let Talker;  
        let TalkingQueue = []; 

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
        
        socket.on("message" , (d)=>{
            console.log(d);
        })



        // setInterval(() => {
        //     var queue  = document.getElementById("queue"); 
        //     var node = document.createElement("LI");   
        //     node.className = "list-group-item list-group-item-success animated bounceInLeft"; 
        //     node.textContent = "this is from upcoming interval"; 
        //     queue.appendChild(node); 
        // }, 2000);
         re = ()=>{
            // var queue  = document.getElementById("queue"); 
            // var node = document.createElement("LI");   
            // node.className = "list-group-item list-group-item-success animated bounceInLeft"; 
            // node.textContent = "this is from upcoming interval"; 
            // queue.appendChild(node); 

            
            $("ul > li").each(function() {
                console.log(this); 
                console.log($(this).text());
                if($(this).text() =="Taher"){
                    $(this).addClass("bounceOutLeft animated"); 
                    $(this).remove(); 
                }

                // $(this).remove();           
            });
         }