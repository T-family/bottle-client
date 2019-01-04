import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { BottleService } from 'src/app/bottle.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  inQueue: Boolean;
  arr = [1 , 3 , 4];
  constructor(private bottleService: BottleService , private webSocket: WebsocketService) {

  }

  ngOnInit() {
    this.inQueue = false;
  }

  async joinQueue() {
    this.webSocket.joinQueue().then(d => {
    });
  }
  addToQueue() {
    this.arr.push(1);
  }
  removeQueue() {
    document.getElementsByClassName('bubble2')[0].classList.add('bounceOutLeft');
    document.getElementsByClassName('bubble2')[0].remove();
   }
}
