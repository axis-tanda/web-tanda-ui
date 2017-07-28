import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as simpleheat from 'simpleheat';
import { data } from './data'
@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css'],
})
export class HeatmapComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let heat = simpleheat('heatmap').data(data).max(18);
    // heat.radius(70, 50);
    heat.draw();
  }


  get(id) {
    return document.getElementById(id);
  }

}
