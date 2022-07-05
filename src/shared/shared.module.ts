import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { WebserviceHandlerService } from './services/webservice-handler.service';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
  ],
  providers: [
    WebserviceHandlerService,
    CommonService,
    Toast,
    Geolocation
  ],
  declarations: [],
})
export class SharedModule {}
