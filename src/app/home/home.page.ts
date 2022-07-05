import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { CommonService } from 'src/shared/services/common.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isItemAvailable = false;
  public city = [];
  public selectedCity = {};
  public cityList: any = [];
  public weatherDetail = {};
  constructor(private service: HomeService, public utils: CommonService, private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((response) => {
      this.getWeatherDetailByLatLong(response.coords.latitude, response.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  onfocusSearch(){
    this.isItemAvailable = true;
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.searchLocation(val)
    }
  }

  searchLocation(search: string) {
    this.service.getLocationList(search).subscribe(data => {
      if(data){
        this.cityList = data;
      }
    }, error => {
      console.log(error);
      this.utils.showToast(error.error.Message);
    });
  }

  //Get weather detail from lat long
  getWeatherDetailByLatLong(lat: number, lng: number) {
    this.service.getLocationByLatLong(lat, lng).subscribe((data: any) => {
      if(data){
        this.selectedCity = data;
        //Call weather detail API
        this.getWeatherDetail(data?.Key);
      }
    }, error => {
      console.log(error);
      this.utils.showToast(error.error.Message);
    });
  }

  //Get weather detail based on city key
  getWeatherDetail(key: any) {
    this.service.getWeatherData(key).subscribe((data: any) => {
      if(data && data.length > 0){
        //Set weather detail
        this.weatherDetail = data[0];
      }
    }, error => {
      console.log(error.Message);
      this.utils.showToast(error.error.Message);
    });
  }

  //Set selected city and call get weather function
  setCity(value){
    this.isItemAvailable = false;
    this.selectedCity = value;
    if(value.Key){
      this.getWeatherDetail(value.Key);
    }
  }
}
