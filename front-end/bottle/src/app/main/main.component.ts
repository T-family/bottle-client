import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { BottleService } from '../bottle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  selectedAvatar: string;
  userName: string;
  constructor(private snack: MatSnackBar , private bottle: BottleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  setAvatar(event) {
    this.selectedAvatar = event;
  }
  done() {
    if (!this.userName || !this.selectedAvatar) {
      // handle error
      this.snack.open('Enter your name and select your avatar broodie!' , 'Cool' , {duration: 2500});
    } else {
      // handle done
      this.router.navigate(['/select-room']).then(_ => {
        this.bottle.createUser(this.userName , this.selectedAvatar);
      });
    }
  }

}
