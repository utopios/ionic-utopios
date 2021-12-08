/**
 * Car Pool starter (https://store.enappd.com/product/carpool-app-starter-ionic)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';
import { environment } from '@env/environment';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  bioData: any;
  constructor(public dataService: DataService,
              private camera: Camera,
              private toastCtrl: ToastController,
              private route: Router) {
    this.bioData = environment.BIOGRAPHY;
  }

  ngOnInit() {
  }
  takeProfilePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.dataService.userProfileData.image = base64Image;

    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
  async showDataSavedToast() {
    const toast = await this.toastCtrl.create({
      message: 'Data saved successfully.',
      duration: 2000,
      cssClass: 'toastCss'
    });
    toast.present();
    this.route.navigate(['/tabs/profile']);
  }
}
