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
  genders = ['male', 'female'];
  submited = false;

    // User Input values
    userName = '';
    userEmail = '';
    secretQuestion = '';
    answer = '';
    gender = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
    // One of approches to set a def values in fields
    // this.singupForm.setValue({
    //   userData: {
    //       username: suggestedName,
    //       email: ''
    //   },
    //   secret: this.defaultQuestion,
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.singupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // Or
  // onSubmit(form: NgForm) {
  //   console.log(form.form.value);
  // }





  onSubmit() {
   const valueOfFields = this.singupForm.value;
    console.log(this.singupForm);
    console.log(valueOfFields.userData.email);
    this.submited = true;
    this.userName = valueOfFields.userData.username;
    this.userEmail = valueOfFields.userData.email;
    this.secretQuestion = valueOfFields.secret;
    this.answer = valueOfFields.questionAnswer;
    this.gender = valueOfFields.gender;

  }
}
