import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  templateUrl: './practice-component.component.html',
  styleUrls: ['./practice-component.component.css']
})
export class PracticeComponentComponent implements OnInit {
  userName = '';
  userNameIsEmpty = true;

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event: any) {
    if(event.target.value != '') {
      this.userNameIsEmpty = false;
    }
  }

  onResetButtonClick() {
    this.userName = '';
    this.userNameIsEmpty = true;
  }

}
