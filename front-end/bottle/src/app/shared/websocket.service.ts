import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import * as Rx from 'rxjs/';
import { BottleService } from '../bottle.service';
import { ServerMessage, MessageTypes } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: SocketIOClient.Socket;

  constructor(private bottle: BottleService) { }

  // tslint:disable-next-line:typedef-whitespace
  connect() : Rx.Subject<MessageEvent> {

    this.socket = io('http://104.248.183.178:5000/');
    // tslint:disable-next-line:no-shadowed-variable
    const observable = new Observable(observer => {
      this.socket.on('message' , (message: ServerMessage) => {
        console.log(message);
        // handle message.
        if (message.type === MessageTypes.userStartedSpeaking ) {
          this.bottle.setSpeakingUser(message);
        }
        if (message.type === MessageTypes.userStoppedSpeaking) {
          this.bottle.speakingUser = null ;
        }
      });
      this.socket.on('disconnect' , () => {
        if (this.bottle.room) {
          this.leaveRoom();
        } else {
          this.socket.disconnect();
        }
      });
      return () => {
        this.socket.disconnect();
      };
    });
     const observer = {
      next: (data: Object) => {
          this.socket.emit('message', JSON.stringify(data));
      },
  };
  return Rx.Subject.create(observer, observable);
  }
  getRoomNames() {
    return new Promise((res , rej ) => {
      this.socket.emit('GetRooms' , (data) => {
        this.bottle.roomNames = data ;
        console.log('Room Names Are :' , data);
        res('successful');
      });
    });

  }
  createRoom(roomName) {
    return new Promise((res , reject) => {
      this.socket.emit('CreateRoom' , {room : roomName , username : this.bottle.user.name ,
         avatar: this.bottle.user.avatar }  , (userId) => {
        console.log('created room of name ' , roomName , 'and had id of : ' , userId);
        this.bottle.setUserId(userId);
        this.bottle.createRoom(roomName);
        res(this.bottle.room);
      });
    });

  }
  joinRoom(roomName) {
    return new Promise((res , rej) => {
      this.socket.emit('JoinRoom' , {room : roomName ,
         avatar: this.bottle.user.avatar,
         username : this.bottle.user.name} , (data) => {
        this.bottle.setUserId(data.AssignedID);
        this.bottle.createRoom(roomName);
        const roomJSOM = JSON.parse(data.Room);
        this.bottle.room.talker = roomJSOM.talker;
        this.bottle.room.queue = roomJSOM.queue;
        this.bottle.room.users = Object.values(roomJSOM.userID_map_Username);
        console.log(JSON.parse(data.Room));
        console.log(JSON.parse(data.Room));
        console.log(this.bottle.room);
        res(this.bottle.room);
      });
    });
  }
  joinQueue() {
    return new Promise((res , rej) => {
      this.socket.emit('JoinQueue' ,
      {room: this.bottle.room.name , userID: this.bottle.user.id , username : this.bottle.user.name
        , avatar : this.bottle.user.avatar} , () => {
        res('success');
      });
    });
  }
  leaveRoom() {
    return new Promise((res, rej ) => {
      this.socket.emit('LeaveRoom' , {room : this.bottle.room.name ,
        username: this.bottle.user.name} , () => {
          this.bottle.clearRoom();
          res('successful');
        });
    });
  }
}

