import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarGalleryComponent } from './shared/avatar-gallery/avatar-gallery.component';
import {CarouselModule} from 'primeng/carousel';


import { UserBarComponent } from './user-bar/user-bar.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SelectRoomComponent, BottomSheetOverviewSheet } from './room/select-room/select-room.component';



const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    AvatarGalleryComponent,
    UserBarComponent,
    SelectRoomComponent,
    BottomSheetOverviewSheet,
  ],
  entryComponents : [ BottomSheetOverviewSheet ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
