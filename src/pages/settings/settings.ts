import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RoomsPage } from '../../pages/rooms/rooms';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  email: any;
  password: any;
  model: any;
  ipAddress: any;
  ipAddress1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = 'razberry';
    console.log(this.email);
    if(typeof this.email == undefined || this.email != null){
      console.log("sudhanshu");
      this.email = localStorage.getItem("email");
      this.password = localStorage.getItem("password");
      this.model = localStorage.getItem("model");
      this.ipAddress = localStorage.getItem("ipAddress");
      this.ipAddress1 = localStorage.getItem("ipAddress1");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveSettings(){
    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    localStorage.setItem("model", this.model);
    localStorage.setItem("ipAddress", this.ipAddress);
    localStorage.setItem("ipAddress1", this.ipAddress1);
    console.log(this.email, this.password, this.model, this.ipAddress, this.ipAddress1);
    this.navCtrl.pop();
    //this.navCtrl.push(RoomsPage);
  }


}
