import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // snapshot's are fine for the initial load, but
      // don't notify angular if the data changes while
      // in the same component.
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // subscribe to the route.params in order to be
    // notified of changes within the changed
    // component itself
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
