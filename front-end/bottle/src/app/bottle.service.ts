import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Room } from './models/room';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BottleService {
  public user: User;
  public room: Room;
  public speakingUser: User;
  public roomNames: any[];
  public queueListener: BehaviorSubject<number> = new BehaviorSubject<number>(null); // to set the user number in queue
  constructor() {
    this.roomNames = [];
  }

  createUser(name , avatar) {
    this.user = new User(name , avatar);
  }
  createRoom(roomName) {
    this.room = new Room(roomName);
  }
  setUserId(id) {
    this.user.id = id;
  }
  updateRoom(roomUpdates) {
    // handle
  }
  setSpeakingUser(name , id) {
    this.speakingUser = new User(name, 'boy');
    this.speakingUser.id = id;
  }
  clearRoom() {
    this.room = null;
  }
}
