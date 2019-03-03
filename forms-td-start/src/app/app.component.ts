import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') singupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.form.value);
  // }

  // Another aproach to get values before submitting with @ViewChild



  onSubmit() {
    console.log(this.singupForm);
  }
}
