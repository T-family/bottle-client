import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar-gallery',
  templateUrl: './avatar-gallery.component.html',
  styleUrls: ['./avatar-gallery.component.scss']
})
export class AvatarGalleryComponent implements OnInit {

  itemsTemp: any[];
  items: any[];
  selectedAvatar = null;
  @Output() selectedAvatarEmitter = new EventEmitter<string>();
  constructor() {
    this.itemsTemp = ['boy' , 'boy2' , 'boy3' , 'girl' , 'baby' , 'dog' , 'man' , 'boy4' , 'bird-poke',
  'cat-poke' , 'cute_boy' , 'fat-poke' , 'fire-poke' , 'girl-brown' , 'girl-golden' , 'nerdy' ,
'nerdy-girl' , 'pikachu' , 'snowman' , 'student' , 'women-golden' , 'support'];
  this.items = this.shuffle();

   }

  ngOnInit() {
  }
  selectAvatar(avatar) {
    this.selectedAvatar = avatar;
    this.selectedAvatarEmitter.emit(avatar);
    // service set to the avatar.
  }
  shuffle() {
    const temparr = this.itemsTemp;
    let ctr = this.itemsTemp.length, temp, index;

    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = temparr[ctr];
            temparr[ctr] = temparr[index];
            temparr[index] = temp;
        }
        return temparr;
  }
}
