import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userServices: UsersService) { }

  ngOnInit() {
    this.users = this.userServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userServices.setToInactive(id)
  }
}
