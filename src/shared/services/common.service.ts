import { Injectable } from '@angular/core';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';

@Injectable()
export class CommonService {
  constructor(public toast: Toast) { }

  //Show Toster message
  showToast(message) {
    console.log(message);
    this.toast.showLongBottom(message).subscribe(
      toast => {
        console.log(toast);
      }, error => console.log(error)
    );
  }
}
