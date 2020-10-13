import { Component, OnInit } from '@angular/core';
import {SpacexService} from './spacex.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  public title: string;
  public data: any;
  constructor(public spacexService: SpacexService){}

  ngOnInit(){
    // this.title = 'spaceX';
    // this.spacexService.getInitialSpaceXList().subscribe(data=>{
    //   console.log(data);
    // })
  }
 
}
