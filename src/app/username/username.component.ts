import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username = '';
  allowToReset = false;

  constructor() {

  }

  ngOnInit() {

  }

  changeValue() {
    if (this.username.length > 0) {
      this.allowToReset = true;
    } else {
      this.allowToReset = false;
    }
  }

  inputReset = (event) => {
    if (this.username.length > 0) {
      this.username = '';
    }
  }
}
