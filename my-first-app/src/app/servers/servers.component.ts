import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by dom-tag
  // selector: '[app-servers]',  // select by attribute
  // selector: '.app-servers',  // select by class
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
