import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  appStatus = new Promise(
  (resolve,reject) => {
    setTimeout(() => {
      resolve('stable');
    },2000);
  });

 private servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  oldServer = [];
  filteredStatus = ''

  ngOnInit() {
    this.oldServer = this.servers;
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  

  //typeahead 

  filterStatus(event){
     const newServer =[]
    if(this.filteredStatus.length === 0  ) {
        return this.servers = this.oldServer;
    } else if(this.filteredStatus.length >=1 ) {
      this.servers.forEach(
        (item) => {
          if(item.status.match(event)) {
            newServer.push(item)
          }
          
        return this.servers = newServer;
        }
      )
    } 
  }
}
