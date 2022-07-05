import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss'],
})
export class TodayWeatherComponent implements OnInit { 
  @Input() detail = {};
  @Input() selectedCity = {};
  constructor() { }

  ngOnInit() {}

}
