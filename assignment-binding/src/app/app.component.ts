import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theNumber = 0;
  evenArray: number[] = [];
  oddArray: number[] = [];

  onGameRunning(gameData: {running: boolean}) {
    this.theNumber += 1;

    if (this.theNumber % 2 === 0) {
      this.evenArray.push(this.theNumber);
    } else {
      this.oddArray.push(this.theNumber);
    }

    console.log(this.theNumber);
  }
}
