import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar-gallery',
  templateUrl: './avatar-gallery.component.html',
  styleUrls: ['./avatar-gallery.component.scss']
})
export class AvatarGalleryComponent implements OnInit {

  items: any;
  selectedAvatar = null;
  @Output() selectedAvatarEmitter = new EventEmitter<string>();
  constructor() {
    this.items = ['boy' , 'boy2' , 'boy3' , 'girl' , 'baby' , 'dog' , 'man' , 'boy4' ];

   }

  ngOnInit() {
  }
  selectAvatar(avatar) {
    this.selectedAvatar = avatar;
    this.selectedAvatarEmitter.emit(avatar);
    // service set to the avatar.
  }

}
