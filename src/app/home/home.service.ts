import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WebserviceHandlerService } from 'src/shared/services/webservice-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private webservice: WebserviceHandlerService) { }

  getLocationList(city){
    return this.webservice.get(`locations/v1/cities/autocomplete?apikey=${environment.API_KEY}&q=${city}`);
  }

  getWeatherData(city){
    return this.webservice.get(`currentconditions/v1/${city}?apikey=${environment.API_KEY}`);
  }
  getLocationByLatLong(lat, lng){
    return this.webservice.get(`locations/v1/cities/geoposition/search?apikey=${environment.API_KEY}&q=${lat},${lng}`);
  }
}
