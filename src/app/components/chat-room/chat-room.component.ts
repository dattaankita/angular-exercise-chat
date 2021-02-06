import { Component, OnInit } from '@angular/core';
import {Message } from '../../models/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  public message : Message;
  public chatList : Message[];
  public text: String;

  constructor(private chatService: ChatService) {
    this.message = new Message('',false, new Date());
    this.chatList = [
      new Message(' I am a demo virtual conversational assistant. I am trained to answer your questions.How can I help you today?',true, new Date())
    ];
  }
  ngOnInit(): void {
  }

  sendCode(){
      console.log(this.message);
      this.chatList.push(this.message);
      this.message=new Message('',false);
      this.chatService.getRouterResponse(this.message).subscribe((data) => {
      
         
          this.chatList.push(data);
          console.log(this.chatList);

      });
    

    }

}
