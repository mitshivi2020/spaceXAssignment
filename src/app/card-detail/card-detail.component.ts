import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input() item: any;
  public imageSource: string;
  constructor() { }

  ngOnInit(): void {
     this.imageSource = this.item['links']['mission_patch_small'];
     console.log('the image source is', this.imageSource);
  }

}
