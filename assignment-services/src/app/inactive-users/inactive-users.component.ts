import { CounterService } from './../counter.service';
import { UsersService } from './../users.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: string[];
  count: number;

  constructor(private usersService: UsersService,
              private countService: CounterService) { }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.count = this.countService.activeToInactive;
  }

  ngDoCheck() {
    this.count = this.countService.activeToInactive;
  }

  onSetToActive(id: number) {
    this.usersService.setUserActive(id);
    this.countService.oneToActive();
  }

}
