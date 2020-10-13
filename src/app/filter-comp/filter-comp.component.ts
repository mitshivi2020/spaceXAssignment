import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-comp',
  templateUrl: './filter-comp.component.html',
  styleUrls: ['./filter-comp.component.css']
})
export class FilterCompComponent implements OnInit {

  public years = [];
  constructor() { }

  ngOnInit(): void {
    this.years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018',
      '2019', '2020']
  }

}
