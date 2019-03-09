import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  restrictedUsernames = ['Chris', 'Ana'];


  // Form
  singUpForm: FormGroup;

  ngOnInit() {
    this.singUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.restrictedNames.bind(this)]),
      'email': new FormControl(null, [Validators.email, Validators.required], this.restrictedEmails),
      'gender': new FormControl('male'),
      'hobby': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.singUpForm);
    this.singUpForm.get('username').reset();
    this.singUpForm.get('email').reset();
    this.singUpForm.get('hobby  ').reset();
  }

  get hobby() {
    return this.singUpForm.get('hobby') as FormArray;
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.hobby.push(control);
  }

  restrictedNames(control: FormControl): {[s: string]: boolean}  {
    if (this.restrictedUsernames.indexOf(control.value) !== -1) {
      return {'nameIsRectricted': true};
    }
    return null;
  }

  restrictedEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, rejected) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({
            'emailIsRectricted': true
          });
        } else {
          resolve (null);
        }
      }, 1000);
    });
    return promise;
  }
}
