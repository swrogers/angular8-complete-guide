import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by dom-tag
  // selector: '[app-servers]',  // select by attribute
  // selector: '.app-servers',  // select by class
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
