import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Loginprovider } from '../../providers/loginprovider';

/*
  Generated class for the Devices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  id: any;
  response: any;
  response1?: any;
  saturation: any;
  response2?: any;
  onOffSwitch: any[]=[];
  dimmableSwitch: any[]=[];
  sensor: any[]=[];
  thermostat: any[]=[];
  camera: any[]=[];
  doorlock: any[]=[];
  temperatureSensor: any[]=[];
  lightSensor: any[]=[];
  device: any;
  changeSwitch: any;
  changeSwitch1: any[]=[];
  changeSwitch2: any[]=[];
  changeSwitch3: any[]=[];
  saturation1: any[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public loginprovider1:Loginprovider){
    this.id = this.navParams.get('id');
    
    var thisObj = this;
    thisObj.loginprovider1.roomJson().subscribe(
      data => {
      console.log(data);
      thisObj.response = data;
      thisObj.response = JSON.parse(thisObj.response._body);
      thisObj.response1 = thisObj.response;
      console.log("databaadka", thisObj.response1.devices);
      for(let i=0; i<thisObj.response1.devices.length;i++){
        // console.log(this.response1.devices[i].room);
        if(thisObj.response1.devices[i].room == thisObj.id){
          console.log(thisObj.response1.devices[i].name);
          //onOffSwitch
          if(thisObj.response1.devices[i].category == 3){
            if(thisObj.response1.devices[i].status == "0"){
              //thisObj.response1.devices[i].status = false;
              thisObj.changeSwitch1[i] = false;
              thisObj.changeSwitch2.push(thisObj.changeSwitch1[i]);
            }
            else{
              //thisObj.response1.devices[i].status = true;
              thisObj.changeSwitch1[i] = true;
              thisObj.changeSwitch2.push(thisObj.changeSwitch1[i]);
            }
            thisObj.onOffSwitch.push(thisObj.response1.devices[i]);
          }
          //dimmableSwitch
          if(thisObj.response1.devices[i].category == 2){
            thisObj.saturation1.push(thisObj.response1.devices[i].level);
            if(thisObj.response1.devices[i].status == "0"){
              //thisObj.response1.devices[i].status = false;
              thisObj.changeSwitch = false;
              thisObj.changeSwitch3.push(thisObj.changeSwitch);
            }
            else{
              //thisObj.response1.devices[i].status = true;
              thisObj.changeSwitch = true;
              thisObj.changeSwitch3.push(thisObj.changeSwitch);
            }
            thisObj.dimmableSwitch.push(thisObj.response1.devices[i]);
          }
          //sensor
          if(thisObj.response1.devices[i].category == 4){
            thisObj.sensor.push(thisObj.response1.devices[i]);
          }
          //thermostat
          if(thisObj.response1.devices[i].category == 5){
            thisObj.thermostat.push(thisObj.response1.devices[i]);
          }
          //camera
          if(thisObj.response1.devices[i].category == 6){
            thisObj.camera.push(thisObj.response1.devices[i]);
          }
          //doorlock
          if(thisObj.response1.devices[i].category == 7){
            thisObj.doorlock.push(thisObj.response1.devices[i]);
          }
          //temperatureSensor
          if(thisObj.response1.devices[i].category == 17){
            thisObj.temperatureSensor.push(thisObj.response1.devices[i]);
          }
          //lightSensor
          if(thisObj.response1.devices[i].category == 18){
            thisObj.lightSensor.push(thisObj.response1.devices[i]);
          }
          
        }
      }
    }); 

    setInterval(function(){
      // thisObj.onOffSwitch = [];
      // thisObj.dimmableSwitch = [];
      // thisObj.sensor = [];
      // thisObj.thermostat = [];
      // thisObj.camera = [];
      // thisObj.doorlock = [];
      // thisObj.temperatureSensor = [];
      // thisObj.lightSensor = [];
      thisObj.loginprovider1.roomJson().subscribe(
      data => {
      thisObj.changeSwitch2 = [];
      thisObj.changeSwitch3 = [];
      thisObj.saturation1 = [];
      console.log(data);
      thisObj.response = data;
      thisObj.response = JSON.parse(thisObj.response._body);
      thisObj.response1 = thisObj.response;
      console.log("databaadka", thisObj.response1.devices);
      for(let i=0; i<thisObj.response1.devices.length;i++){
        // console.log(this.response1.devices[i].room);
        if(thisObj.response1.devices[i].room == thisObj.id){
          console.log(thisObj.response1.devices[i].name);
          //onOffSwitch
          if(thisObj.response1.devices[i].category == 3){
            if(thisObj.response1.devices[i].status == "0"){
              //thisObj.response1.devices[i].status = false;
              
              thisObj.changeSwitch1[i] = false;
              thisObj.changeSwitch2.push(thisObj.changeSwitch1[i]);
            }
            else{
              // thisObj.response1.devices[i].status = true;
              // thisObj.statusOnOff = true;
              thisObj.changeSwitch1[i] = true;
              thisObj.changeSwitch2.push(thisObj.changeSwitch1[i]);
              console.log("love", thisObj.changeSwitch2);
            }
            //thisObj.onOffSwitch.push(thisObj.response1.devices[i]);
          }
          //dimmableSwitch
          if(thisObj.response1.devices[i].category == 2){
            thisObj.saturation = thisObj.response1.devices[i].level;
            thisObj.saturation1.push(thisObj.saturation);
            console.log("love1", thisObj.saturation1);
            if(thisObj.response1.devices[i].status == "0"){
              //thisObj.response1.devices[i].status = false;
              thisObj.changeSwitch = false;
              thisObj.changeSwitch3.push(thisObj.changeSwitch);
            }
            else{
              // thisObj.response1.devices[i].status = true;
              thisObj.changeSwitch = true;
              thisObj.changeSwitch3.push(thisObj.changeSwitch);
            }
            console.log("love2", thisObj.changeSwitch3);
            //thisObj.dimmableSwitch.push(thisObj.response1.devices[i]);
          }
          //sensor
          // if(thisObj.response1.devices[i].category == 4){
          //   thisObj.sensor.push(thisObj.response1.devices[i]);
          // }
          // //thermostat
          // if(thisObj.response1.devices[i].category == 5){
          //   thisObj.thermostat.push(thisObj.response1.devices[i]);
          // }
          // //camera
          // if(thisObj.response1.devices[i].category == 6){
          //   thisObj.camera.push(thisObj.response1.devices[i]);
          // }
          // //doorlock
          // if(thisObj.response1.devices[i].category == 7){
          //   thisObj.doorlock.push(thisObj.response1.devices[i]);
          // }
          // //temperatureSensor
          // if(thisObj.response1.devices[i].category == 17){
          //   thisObj.temperatureSensor.push(thisObj.response1.devices[i]);
          // }
          // //lightSensor
          // if(thisObj.response1.devices[i].category == 18){
          //   thisObj.lightSensor.push(thisObj.response1.devices[i]);
          // }
          
        }
      }
    }); 

    },2000);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

  onDevice(evt,name){
    var switchValue;
    console.log(evt.checked,name);
    // var ipAddress = localStorage.getItem('ipAddress');
    // console.log(ipAddress);
    
    if(evt.checked == true){
      switchValue = "1";
      console.log("sdfasdf",switchValue)
    }
    if(evt.checked == false){
      switchValue = "0";
    }

    this.loginprovider1.switchOn(switchValue, name).subscribe(
      data => {console.log(data);
      //this.response = data;
    })
  }

  setDim(evt,name){
    console.log("saturationValue", this.saturation);
    // console.log(evt);
    // var switchValue;
    // console.log(evt.checked,name);
    // var ipAddress = localStorage.getItem('ipAddress');
    // console.log(ipAddress);
  
    // if(evt.checked == true){
    //   switchValue = "1";
    //   console.log("sdfasdf",switchValue)
    // }
    // if(evt.checked == false){
    //   switchValue = "0";
    // }


    this.loginprovider1.dimmable(this.saturation, name).subscribe(
      data => {console.log(data);
      //this.response = data;
    })
  }
}
