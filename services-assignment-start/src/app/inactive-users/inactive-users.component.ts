import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];


  constructor(private userServices: UsersService) { }

  ngOnInit() {
    this.users = this.userServices.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userServices.setToActive(id)
  }
}
