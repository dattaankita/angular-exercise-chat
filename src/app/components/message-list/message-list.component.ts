import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  messages : Message[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
