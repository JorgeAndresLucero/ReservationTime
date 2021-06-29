import { Component, OnInit } from '@angular/core';
interface Time {
  name: string
}
@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent  {
  times: Time[];
  selectedTime!: Time;

  constructor(
  ) { 
    this.times =[
      {name: "30 minutos"},
      {name: "1 hora"},
      {name: "2 horas"}
    ];
  }

}
