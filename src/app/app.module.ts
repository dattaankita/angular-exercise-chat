import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from'./angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

import { ThemeModule } from './modules/theme/theme.module';
import { lightTheme } from './modules/theme/light-theme';
import { darkTheme } from './modules/theme/dark-theme';
import { ChatService} from './services/chat.service';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatNavComponent } from './components/chat-nav/chat-nav.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { SentMessagesComponent } from './components/sent-messages/sent-messages.component';
import { ResponseMessagesComponent } from './components/response-messages/response-messages.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWidgetComponent,
    ChatWindowComponent,
    ChatNavComponent,
    ChatFormComponent,
    ChatBoxComponent,
    SentMessagesComponent,
    ResponseMessagesComponent,
    MessageItemComponent,
    MessageListComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
