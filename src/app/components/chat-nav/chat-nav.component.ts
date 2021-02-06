import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../modules/theme/theme.service';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.css']
})
export class ChatNavComponent implements OnInit {

  overlaySize = 0.875;
  bubbleSize = 0.8125;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }


  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  decreaseFontSize(){
    this.bubbleSize = this.bubbleSize - 0.0625;
    this.overlaySize = this.overlaySize - 0.0625;
  }

  increaseFontSize(){
    this.bubbleSize = this.bubbleSize + 0.0625;
    this.overlaySize = this.overlaySize + 0.0625;
  }

  resetFontSize(){
    this.overlaySize = 0.875;
    this.bubbleSize = 0.8125;
  }
}
