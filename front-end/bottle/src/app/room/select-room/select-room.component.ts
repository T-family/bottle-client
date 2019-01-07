import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { BottleService } from 'src/app/bottle.service';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.scss']
})
export class SelectRoomComponent implements OnInit {

  roomName: string;
  Loading: Boolean;
  constructor(
    private router: Router,
    private webSocket: WebsocketService,
    private bottomSheet: MatBottomSheet, private snack: MatSnackBar) { }

  ngOnInit() {
    this.Loading = false;
  }
  async openBottomSheet()  {
    this.Loading = true;
    await this.webSocket.getRoomNames();
    this.Loading = false;
    this.bottomSheet.open(BottomSheetOverviewSheet);
  }
  async createRoom() {
    if (!this.roomName || this.roomName.length === 0) {
      this.snack.open('should enter a room name' , 'Kay.' , {duration: 2200});
    } else {
      const createRoom = await this.webSocket.createRoom(this.roomName);
      console.log(createRoom);
      this.router.navigate(['/room']);
    }
  }
  async joinQueue() {
    this.webSocket.joinQueue().then(d => {
      console.log(d);
    });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-sheet-overview-sheet',
  templateUrl: 'bottom-sheet-overview-sheet.html',
})
// tslint:disable-next-line:component-class-suffix
export class BottomSheetOverviewSheet {
  constructor(
    private bottle: BottleService,
    private webSocket: WebsocketService,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewSheet> , private router: Router) {}

  async openLink(event) {
    const room = await this.webSocket.joinRoom(event);
    this.bottomSheetRef.dismiss();
    this.router.navigate(['/room']);
  }
}
