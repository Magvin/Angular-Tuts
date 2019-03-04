import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Another aproach to get values before submitting with @ViewChild
  @ViewChild('f') singupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.singupForm.setValue({
      userData: {
          username: suggestedName,
          email: ''
      },
      secret: this.defaultQuestion,
      questionAnswer: '',
      gender: 'male'


    });
  }

  // Or
  // onSubmit(form: NgForm) {
  //   console.log(form.form.value);
  // }





  onSubmit() {
    console.log(this.singupForm);
  }
}
