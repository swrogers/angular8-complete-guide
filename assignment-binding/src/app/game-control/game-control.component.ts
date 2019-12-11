import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // theNumber = 0;
  intervalID: any;
  isRunning: boolean;

  @Output() gameStartRunning = new EventEmitter<{running: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  onStartClicked() {
    this.isRunning = true;
    this.intervalID = setInterval(() => {
      this.gameStartRunning.emit({running: this.isRunning});
    }, 1000);
  }

  onStopClicked() {
    this.isRunning = false;
    clearInterval(this.intervalID);
  }

}
