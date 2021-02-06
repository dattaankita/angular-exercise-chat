import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  overlaySize = 0.875;
  bubbleSize = 0.8125;
  
  @Input('messageList')
  messageList: Message[];
  
  constructor() { }
  
 

  ngOnInit(): void {
  }

}
