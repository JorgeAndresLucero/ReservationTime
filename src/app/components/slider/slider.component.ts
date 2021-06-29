import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  title = 'Slider';
  val: number=0;
  rangeValues: number[] = [7,18];

  constructor() {


   }

}