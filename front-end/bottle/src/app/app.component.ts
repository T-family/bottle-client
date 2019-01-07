import { Socket } from 'ngx-socket-io';
import { Component } from '@angular/core';
import { WebsocketService } from './shared/websocket.service';
import { Subject } from 'rxjs';
import { BottleService } from './bottle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: Subject<any>;

  constructor(private wsService: WebsocketService , public bottle: BottleService) {
    this.messages = wsService.connect();
    this.messages.subscribe(d => {
      console.log(d);
    }
      );
 }

// Our simplified interface for sending
// messages back to our socket.io server
sendMsg(msg) {
  this.messages.next(msg);
}

}
