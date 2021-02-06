import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

export interface ChatText {
  text: string;
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {

  ngOnInit(): void {
  }

  overlaySize = 0.875;
  bubbleSize = 0.8125;

  chatText: Array<ChatText>;

  // constructor(private chatService: ChatService) { 
  //   this.chatText = [];
  // }

  // ngOnInit() {
  //   this.chatService.messagesChannel.bind('new-message', (message) => {
  //     this.chatText.push(message);
  //   });
  // }


}
