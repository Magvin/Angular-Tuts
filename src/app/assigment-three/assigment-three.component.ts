import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment-three',
  templateUrl: './assigment-three.component.html',
  styleUrls: ['./assigment-three.component.css']
})
export class AssigmentThreeComponent implements OnInit {

  id = [];
  paragraph: string = 'Secret Password'
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  increaseId() {
    this.toggle = !this.toggle;
    this.id.push(this.id.length + 1)
    console.log(this.id)
  }
}
