import { Component, OnInit, Input } from '@angular/core';
import { basicOpacityInOutAnimationTrigger } from 'src/app/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations : [basicOpacityInOutAnimationTrigger]
})
export class LoaderComponent implements OnInit {

  @Input() Loading: Boolean;
  @Input() Image: string;
  constructor() { }

  ngOnInit() {
  }

}
