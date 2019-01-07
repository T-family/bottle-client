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
  setSpeakingUser(data) {
    if (data.avatar) {
    this.speakingUser = new User(data.username, data.avatar);
    } else {
      this.speakingUser = new User(data.username , 'boy');
    }
    this.speakingUser.id = data.userID;
  }
  clearRoom() {
    this.room = null;
  }
  removeUserFromQueue(name , id) {
    console.log(this.room.queue);
    this.room.queue = this.room.queue.filter(el => (el.userID !== id));
    console.log(this.room.queue);
  }
  public permitToJoinQueue() {
    if (this.speakingUser === undefined || this.speakingUser === null) {
      return true;
    }
    let permit = true;
    if (this.user.getId() === this.speakingUser.getId()) {
      permit = false;
    }
    this.room.queue.forEach(user => {
      if (user.userID === this.user.getId()) {
        permit = false;
      }
    });
    return permit;
  }
}
