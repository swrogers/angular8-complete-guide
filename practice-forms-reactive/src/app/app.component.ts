import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice-forms-reactive';
  projectForm: FormGroup;
  disallowedProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required,
                                            this.checkProjectNamesAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null),
    });

  }

  onSubmit() {
    const f = this.projectForm;
    const output = `Project Name: ${f.get('projectName').value}
Project Email: ${f.get('email').value}
Project Status: ${f.get('projectStatus').value}`;

    console.log(output);
  }

  checkProjectNames(control: FormControl) : {[errName: string]: boolean} {
    if(this.disallowedProjectNames.indexOf(control.value) !== -1) {
      return {
        'nameIsInvalid': true
      };
    }

    return null;
  }

  checkProjectNamesAsync(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(this.disallowedProjectNames.indexOf(control.value) !== -1) {
          resolve({'nameIsInvalid': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
