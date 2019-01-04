import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';
import { Router } from '@angular/router';
import { WebsocketService } from '../shared/websocket.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  constructor(private bottle: BottleService ,
     private router: Router , private webSocket: WebsocketService) { }

  ngOnInit() {
  }
  async leaveRoom() {
   await this.webSocket.leaveRoom();
   console.log('leaving room');
   this.router.navigate(['/select-room']);
  }
}
