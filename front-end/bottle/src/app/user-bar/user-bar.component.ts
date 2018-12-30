import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  constructor(private bottle: BottleService) { }

  ngOnInit() {
  }

}
