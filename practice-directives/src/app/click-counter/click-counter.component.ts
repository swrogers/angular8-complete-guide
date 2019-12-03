import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {
  clickCount = 0;
  clickArray = [];

  constructor() { }

  ngOnInit() {
  }

  updateArray() {
    this.clickCount += 1;
    this.clickArray.push(this.clickCount);
  }

}
