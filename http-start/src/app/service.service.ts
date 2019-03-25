import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: Http ) { }

    storeService (servers: any[]) {
     return this.http.put('https://angular-5f181.firebaseio.com/data.json', servers);
    }

    fetchData () {
      return this.http.get('https://angular-5f181.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data
        }
      );
    }
}
