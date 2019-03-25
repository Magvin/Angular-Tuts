import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [];
  constructor(private serverService: ServiceService) {}

  ngOnInit () {
    this.serverService.fetchData()
    .subscribe(
      (data:[]) => {
       this.servers = data;
     }
    );
   }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave () {
    this.serverService.storeService(this.servers)
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
