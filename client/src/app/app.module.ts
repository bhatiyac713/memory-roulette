import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { ChatViewerComponent } from './chat-viewer/chat-viewer.component';

import { PhotoService } from './photo/photo.service';
import { ChatService } from './chat/chat.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PhotoViewerComponent, ChatViewerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PhotoService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
