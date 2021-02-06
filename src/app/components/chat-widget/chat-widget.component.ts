import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openForm(){
    document.getElementById("myForm").style.display = "block";
  }
}
