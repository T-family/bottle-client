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
  constructor(public bottleService: BottleService , public webSocket: WebsocketService) {

  }

  ngOnInit() {
    this.inQueue = false;
  }

  async joinQueue() {
    this.webSocket.joinQueue().then(d => {
      console.log(d);
    }).catch(err => {
      console.log(err);
      console.log('walahy mana me5alek tetkalm');
      const audio = new Audio();
      const names = ['zeyad' , 'amar' , 'farida' , 'trio' , 'maynfa3sh'];
      const selected = names[Math.ceil(Math.random() * names.length - 1 )];
      audio.src = `../../../assets/voices/${selected}.mp3`;
      audio.load();
      audio.play();
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
