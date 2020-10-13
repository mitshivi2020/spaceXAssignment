import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getInitialSpaceXList(){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
}
