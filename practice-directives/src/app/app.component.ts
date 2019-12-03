import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  clickCount = 0;
  clickArray = [];

  onToggleClick() {
    this.showParagraph = !this.showParagraph;
    this.clickCount += 1;
    this.clickArray.push(this.clickCount);
  }
}
