import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.scss']
})
export class SelectRoomComponent implements OnInit {

  roomName: string;
  constructor(private bottomSheet: MatBottomSheet, private snack: MatSnackBar) { }

  ngOnInit() {
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewSheet);
  }
  createRoom() {
    if (!this.roomName || this.roomName.length === 0) {
      this.snack.open('should enter a room name' , 'Kay.' , {duration: 2200});
    } else {
      // handle logic.
    }
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-sheet-overview-sheet',
  templateUrl: 'bottom-sheet-overview-sheet.html',
})
// tslint:disable-next-line:component-class-suffix
export class BottomSheetOverviewSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewSheet> , private router: Router) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    this.router.navigate(['/main']);
  }
}
