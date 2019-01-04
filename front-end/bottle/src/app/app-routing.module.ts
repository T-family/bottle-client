import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SelectRoomComponent } from './room/select-room/select-room.component';
import { RoomComponent } from './room/room/room.component';

const routes: Routes = [
  { path: 'main', component: MainComponent  },
  { path: 'select-room',      component: SelectRoomComponent},
  { path: 'room',      component: RoomComponent},

  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component:  MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
