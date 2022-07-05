import { Injectable } from '@angular/core';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class CommonService {
  public loading;
  constructor(public toast: Toast, private loadingCtrl: LoadingController) { }

  //Show Toster message
  showToast(message) {
    console.log(message);
    this.toast.showLongBottom(message).subscribe(
      toast => {
        console.log(toast);
      }, error => console.log(error)
    );
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      duration: 5000,
      cssClass: 'custom-loading'
    });
    this.loading.present();
  }
  async hideLoading() {
    this.loading.dismiss();
  }
}
