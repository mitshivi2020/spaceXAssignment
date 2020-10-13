import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})
export class ListCompComponent implements OnInit {

  public craft: any;
  public craftList: any;
  constructor(public spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getInitialSpaceXList().subscribe(data => {
      // console.log(data);
      this.craftList = data;
      this.craft = data[0];
      console.log(this.craft);
    })
  }

}
