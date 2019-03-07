import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  // Form
  singUpForm: FormGroup;

  ngOnInit() {
    this.singUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'gender': new FormControl('male'),
      'hobby': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.singUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
   (<FormArray> this.singUpForm.get('hobby')).push(control);
  }
}
