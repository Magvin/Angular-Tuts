import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server been created'
  serverName = '';
  serverCreated = false;
  servers = ['Test server', 'New Server']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }


  onCreateServer = () => {
    this.servers.push(this.serverName)
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName

    setTimeout(() => {
      this.serverCreated = false;
    }, 1500)

  }

  onUpdateServerName = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
