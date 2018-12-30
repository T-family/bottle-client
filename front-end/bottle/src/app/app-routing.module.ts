import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SelectRoomComponent } from './room/select-room/select-room.component';

const routes: Routes = [
  { path: 'main', component: MainComponent  },
  { path: 'select-room',      component: SelectRoomComponent},

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
