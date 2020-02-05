import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) subForm: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  data = {
    emailAddress: '',
    password: '',
    subscription: ''
  };

  title = 'practice-forms';

  onSubmit() {
    this.submitted = true;
    console.log(this.subForm.value.emailAddress);
    const submittedData = this.subForm.value;

    this.data.emailAddress = submittedData.emailAddress;
    this.data.password = submittedData.password;
    this.data.subscription = submittedData.subscription;
  }
}
