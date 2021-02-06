import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ChatText } from '../chat-window/chat-window.component';
import {Message } from '../../models/message';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  // chatMessage : string ='';

  // chatText: Array<ChatText>;
  
  // constructor(private chatService: ChatService) { 
  //   this.chatText = [];
  // }

  // ngOnInit() {

  // }

  // sendChatMessage(){}

  // onSend(text: string) {
  // }
  public message : Message;
  public chatList : Message[];
  public text: String;

  constructor( private chatService: ChatService) {
    //this.text = "";
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
