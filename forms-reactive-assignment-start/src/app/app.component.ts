import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // Project names which are already taken
  restrictedProjectNames = ['Test'];

  // Status of projects
  statusOfProjects = ['Stable', 'Critical', 'Finished'];

  // Form
  projectForm: FormGroup;


  ngOnInit() {

    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.onProjectRestricted),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl('Stable')
    });

  }

  onSubmit() {
    console.log (this.projectForm);
  }

  //  custom async validator who checks does project name is taken

  onProjectRestricted(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({
            'projectNameTaken': true
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;

  }


}
