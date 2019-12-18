import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';
import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, DoCheck {
  users: string[];
  count: number;

  constructor(private usersService: UsersService,
              private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
    this.count = this.counterService.inactiveToActive;
  }

  ngDoCheck() {
    this.count = this.counterService.inactiveToActive;
  }

  onSetToInactive(id: number) {
    this.usersService.setUserInactive(id);
    this.counterService.oneToInactive();
  }

}
