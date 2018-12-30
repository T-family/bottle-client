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
  public queueListener: BehaviorSubject<number> = new BehaviorSubject<number>(null); // to set the user number in queue
  constructor() {
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
}
