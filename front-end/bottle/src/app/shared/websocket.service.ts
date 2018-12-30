import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import * as Rx from 'rxjs/';
import { BottleService } from '../bottle.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: SocketIOClient.Socket;

  constructor(private bottle: BottleService) { }

  // tslint:disable-next-line:typedef-whitespace
  connect() : Rx.Subject<MessageEvent> {

    this.socket = io('http://127.0.0.1:5000/');
    // tslint:disable-next-line:no-shadowed-variable
    const observable = new Observable(observer => {
      this.socket.on('message' , (data) => {
        // handle message.
        observer.next(data);
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
  createRoom(roomName) {
    this.socket.emit('CreateRoom' , {room : 'room' , username : 'taher'}  , (userId) => {
      console.log('joined room of name ' , roomName , 'and had id of : ' , userId);
      this.bottle.setUserId(userId);
      this.bottle.createRoom(roomName);
    });
  }
  joinRoom(roomName) {
    this.socket.emit('JoinRoom' , {room : roomName , username : this.bottle.user.name} , (userId) => {
      console.log('joined room of name ' , roomName , 'and had id of : ' , userId);
      this.bottle.setUserId(userId);
    });
  }
}

