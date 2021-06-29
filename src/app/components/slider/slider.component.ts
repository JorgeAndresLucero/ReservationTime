import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  title = 'Slider';
  val: number=7;
  minutes: string="";
  day_time: string ="am";
  rangeValues: number[] = [7,18];

  hour(val: number){
    val >= 12 ?  this.day_time = "pm" : this.day_time = "am";
    return this.day_time;
  }
  
  transformation(val: number){
    Number.isInteger(val) ?  (this.minutes = this.val.toString()+":00") : this.minutes = Number.parseInt(this.val.toString())+":30";
    return this.minutes;
  }
  

 
  constructor() {
   }

   

}
