import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authservice: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // complex calculation
    this.router.navigate(
      ['/servers', id, 'edit'],
      {
        queryParams: {
          allowEdit: '1'
        },
        fragment: 'loading'
      }
    );
  }

  onLogin() {
    this.authservice.login();
  }

  onLogout() {
    this.authservice.logout();
  }

}
