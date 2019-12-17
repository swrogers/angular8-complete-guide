import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor() { }

  ngOnInit() {
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }

}
