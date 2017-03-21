import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Loginprovider } from '../../providers/loginprovider';
import { DevicesPage } from '../devices/devices';

/*
  Generated class for the Rooms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {
  response: any;
  hartscoJson: any;
  mushrooms: any;
  response1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginprovider1:Loginprovider, public appCtrl: App) {
    // this.loginprovider1.roomJson().subscribe(
    //   data => {console.log(data);
    //   this.response = data;
    //   this.response = JSON.parse(this.response._body);
    //   this.response1 = this.response;
    //   console.log("databaadka", this.response1.rooms);
    //   });
    this.hartscoJson = { "full": 1, "version": "*1.7.2139*", "model": "Sercomm NA301", "zwave_heal": 1, "temperature": "C", "skin": "mios", "serial_number": "45200488", "fwd1": "vera-us-oem-relay31.mios.com", "fwd2": "vera-us-oem-relay12.mios.com", "mode": 1, "sections": [ { "name": "My Home", "id": 1 } ], 
    "rooms": [ { "name": "Dining Room", "id": 2, "section": 1 }, 
               { "name": "Family Room", "id": 3, "section": 1 }, 
               { "name": "Office", "id": 4, "section": 1 }, 
               { "name": "Upstairs", "id": 1, "section": 1 } ], 
    "scenes": [ { "name": "Dining Pendant Off", "id": 2, "room": 0, "active": 0 }, 
                { "name": "Dining Pendant On", "id": 1, "room": 0, "active": 1 }, 
                { "active": 1, "name": "h_AllOff_Doors", "id": 4, "room": 0 }, 
                { "name": "h_AllOff_Lights", "id": 3, "room": 0, "active": 0 } ], 
    "devices": [ { "name": "Dining Pendant", "altid": "3", "id": 4, "category": 2, "subcategory": 3, "room": 2, "parent": 1, "kwh": "47.3760", "watts": "0.000", "level": "100", "status": "1", "state": 4, "comment": "Dining Pendant: SUCCESS! Transmit was OK" }, 
                 { "name": "Event Watcher", "altid": "", "id": 29, "category": 0, "subcategory": -1, "room": 0, "parent": 0 }, 
                 { "name": "FAMILY LEFT", "altid": "4", "id": 5, "category": 3, "subcategory": 0, "room": 3, "parent": 1, "status": "0", "state": -1, "comment": "" }, 
                 { "name": "Family Right", "altid": "5", "id": 8, "category": 3, "subcategory": 0, "room": 3, "parent": 1, "status": "0", "state": -1, "comment": "" }, 
                 { "name": "Family Room", "altid": "", "id": 24, "category": 6, "subcategory": -1, "room": 0, "parent": 0, "ip": "192.168.1.154", "url": "Streaming\/channels\/1\/picture", "commands": "camera_full_screen,camera_archive_snapshot", "commFailure": "1", "armed": "1", "armedtripped": "0"},{ "name": "Front Door", "altid": "11", "id": 26, "category": 7, "subcategory": 0, "room": 1, "parent": 1, "pincodes": "<VERSION=3>2\t1,1,2016-07-16 17:23:07,,****,Damian;\t2,1,2016-07-16 17:23:17,,****,Georgia;\t3,0;\t4,0;\t5,0;\t6,0;\t7,0;\t8,0;\t9,0;\t10,0;\t11,0;\t12,0;\t13,0;\t14,0;\t15,0;\t16,0;\t17,0;\t18,0;\t19,0;\t20,0;\t21,0;\t22,0;\t23,0;\t24,0;\t25,0;\t26,0;\t27,0;\t28,0;\t29,0;\t30,0;\t31,0;\t32,0;\t33,0;\t34,0;\t35,0;\t36,0;\t37,0;\t38,0;\t39,0;\t40,0;\t41,0;\t42,0;\t43,0;\t44,0;\t45,0;\t46,0;\t47,0;\t48,0;\t49,0;\t50,0;\t51,0;\t52,0;\t53,0;\t54,0;\t55,0;\t56,0;\t57,0;\t58,0;\t59,0;\t60,0;\t61,0;\t62,0;\t63,0;\t64,0;\t65,0;\t66,0;\t67,0;\t68,0;\t69,0;\t70,0;\t71,0;\t72,0;\t73,0;\t74,0;\t75,0;\t76,0;\t77,0;\t78,0;\t79,0;\t80,0;\t81,0;\t82,0;\t83,0;\t84,0;\t85,0;\t86,0;\t87,0;\t88,0;\t89,0;\t90,0;\t91,0;\t92,0;\t93,0;\t94,0;\t95,0;\t96,0;\t97,0;\t98,0;\t99,0;\t100,0;\t101,0;\t102,0;\t103,0;\t104,0;\t105,0;\t106,0;\t107,0;\t108,0;\t109,0;\t110,0;\t111,0;\t112,0;\t113,0;\t114,0;\t115,0;\t116,0;\t117,0;\t118,0;\t119,0;\t120,0;\t121,0;\t122,0;\t123,0;\t124,0;\t125,0;\t126,0;\t127,0;\t128,0;\t129,0;\t130,0;\t131,0;\t132,0;\t133,0;\t134,0;\t135,0;\t136,0;\t137,0;\t138,0;\t139,0;\t140,0;\t141,0;\t142,0;\t143,0;\t144,0;\t145,0;\t146,0;\t147,0;\t148,0;\t149,0;\t150,0;\t151,0;\t152,0;\t153,0;\t154,0;\t155,0;\t156,0;\t157,0;\t158,0;\t159,0;\t160,0;\t161,0;\t162,0;\t163,0;\t164,0;\t165,0;\t166,0;\t167,0;\t168,0;\t169,0;\t170,0;\t171,0;\t172,0;\t173,0;\t174,0;\t175,0;\t176,0;\t177,0;\t178,0;\t179,0;\t180,0;\t181,0;\t182,0;\t183,0;\t184,0;\t185,0;\t186,0;\t187,0;\t188,0;\t189,0;\t190,0;\t191,0;\t192,0;\t193,0;\t194,0;\t195,0;\t196,0;\t197,0;\t198,0;\t199,0;\t200,0;\t201,0;\t202,0;\t203,0;\t204,0;\t205,0;\t206,0;\t207,0;\t208,0;\t209,0;\t210,0;\t211,0;\t212,0;\t213,0;\t214,0;\t215,0;\t216,0;\t217,0;\t218,0;\t219,0;\t220,0;\t221,0;\t222,0;\t223,0;\t224,0;\t225,0;\t226,0;\t227,0;\t228,0;\t229,0;\t230,0;\t231,0;\t232,0;\t233,0;\t234,0;\t235,0;\t236,0;\t237,0;\t238,0;\t239,0;\t240,0;\t241,0;\t242,0;\t243,0;\t244,0;\t245,0;\t246,0;\t247,0;\t248,0;\t249,0;\t250,0;\t255,0;\t", "batterylevel": "83", "armed": "0", "armedtripped": "0", "locked": "1", "state": -1, "comment": "" }, 
                 { "name": "h_Appliance Module 1", "altid": "e2", "id": 10, "category": 3, "subcategory": 0, "room": 3, "parent": 8, "status": "0" }, { "name": "h_Appliance Module 2", "altid": "e1", "id": 16, "category": 3, "subcategory": 0, "room": 0, "parent": 15, "status": "0" }, 
                 { "name": "h_Appliance Module 3", "altid": "e2", "id": 17, "category": 3, "subcategory": 0, "room": 0, "parent": 15, "status": "0" }, { "name": "h_NESS KeyFob Test", "altid": "8", "id": 15, "category": 3, "subcategory": 0, "room": 0, "parent": 1, "status": "0", "commFailure": "1", "state": -1, "comment": "" }, 
                 { "name": "h_s_LghtsLeft", "altid": "e1", "id": 6, "category": 3, "subcategory": 0, "room": 3, "parent": 5, "status": "0" }, { "name": "hsTestLightOffice", "altid": "e1", "id": 31, "category": 3, "subcategory": 0, "room": 4, "parent": 30, "status": "0" }, 
                 { "name": "hsvTestLightOffice", "altid": "e2", "id": 32, "category": 3, "subcategory": 0, "room": 4, "parent": 30, "status": "0" }, 
                 { "name": "HVAC Upstairs", "altid": "10", "id": 25, "category": 5, "subcategory": 1, "room": 1, "parent": 1, "fanmode": "Auto", "hvacstate": "Idle", "mode": "Off", "setpoint": "24.0", "heat": "24.0", "cool": "24.0", "batterylevel": "100", "temperature": "19.4", "state": -1, "comment": "" }, 
                 { "name": "Lights Center", "altid": "e2", "id": 7, "category": 3, "subcategory": 0, "room": 3, "parent": 5, "status": "0", "setpoint": "26", "heat": "26", "cool": "26" }, { "name": "ls_Office", "altid": "m3", "id": 38, "category": 18, "subcategory": 0, "room": 4, "parent": 36, "light": "0" }, 
                 { "name": "ms_Office", "altid": "14", "id": 36, "category": 4, "subcategory": 3, "room": 4, "parent": 1, "armed": "0", "armedtripped": "0", "batterylevel": "100", "lasttrip": "1486367327", "tripped": "0", "state": -1, "comment": "" }, 
                 { "name": "Program Logic Event Generator (PLEG)", "altid": "", "id": 27, "category": 0, "subcategory": -1, "room": 0, "parent": 0, "armed": "1", "conditionsatisfied": "None", "conditionrepeat": "{}", "objectstatusmap": "{{name = 'cAutoOn_OfficeTestLight', state = false, seq = 1474274800.0673, oseq = 1474274800.3551},{name = 'tOfficeTestLightOn', state = true, seq = 1474795313.0157, oseq = 1474795312.7758},{name = 'mVacation', state = false, seq = 0, oseq = 0},{name = 'mAway', state = false, seq = 0, oseq = 0},{name = 'mHome', state = true, seq = 1474250204.1012, oseq = 0},{name = 'mNight', state = false, seq = 0, oseq = 0},{name = 'sOfficeTestLight_2mins', state = false, seq = 1474274825.1882, oseq = 1474274885.1016},{name = 'tMotion_Office', state = false, seq = 1475467713.7861, oseq = 1475467754.0149},{name = 'pOfficeArmed', state = nil, seq = 1475467754.0229, oseq = 1475448384.5453},{name = 'cKeepOn_OfficeTestLight', state = false, seq = 1474274825.1403, oseq = 1474274835.6593},{name = 'cAutoOff_OfficeTestLight', state = false, seq = 1474274885.1079, oseq = 1474274885.4097},}", "actions": "{'lua_OutputVariableNames':{},'cAutoOn_OfficeTestLight':[{'delay':0,'actions':[{'device':'30','service':'urn:upnp-org:serviceId:SwitchPower1','action':'SetTarget','arguments':[{'name':'newTargetValue','value':'1'}],'hasValue':true,'sceneGroup':1}],'devices':['30']}],'cAutoOff_OfficeTestLight':[{'delay':0,'actions':[{'device':'30','service':'urn:upnp-org:serviceId:SwitchPower1','action':'SetTarget','arguments':[{'name':'newTargetValue','value':'0'}],'hasValue':true,'sceneGroup':1}],'devices':['30']}],'cKeepOn_OfficeTestLight':[{'delay':0,'actions':[{'device':'27','service':'urn:rts-services-com:serviceId:ProgramLogicC','action':'StartTimer','arguments':[{'name':'timerName','value':'sOfficeTestLight_2mins'},{'name':'intervalTime','value':''}]}],'devices':['27']}]}", "triggers": "['Home','mHome','Away','mAway','Night','mNight','Vacation','mVacation']", "schedules": "[['sOfficeTestLight_2mins','6','','',null,'1','01:00','','']]", "properties": "[['pOfficeArmed','33','urn:micasaverde-com:serviceId:SecuritySensor1','Armed']]" }, 
                 { "name": "Split System Office", "altid": "6", "id": 11, "category": 5, "subcategory": 1, "room": 4, "parent": 1, "fanmode": "ContinuousOn", "mode": "Off", "setpoint": "18", "heat": "18", "cool": "18", "batterylevel": "1", "temperature": "21", "state": -1, "comment": "" }, 
                 { "name": "TestLight", "altid": "12", "id": 30, "category": 3, "subcategory": 0, "room": 4, "parent": 1, "status": "1", "commFailure": "1", "state": 2, "comment": "TestLight: Please wait! Getting the manufacturer" }, { "name": "ts_Office", "altid": "m1", "id": 37, "category": 17, "subcategory": 0, "room": 4, "parent": 36, "temperature": "22.3" } ], 
                 "categories": [ { "name": "Dimmable Switch", "id": 2 }, { "name": "On\/Off Switch", "id": 3 }, { "name": "Sensor", "id": 4 }, { "name": "Thermostat", "id": 5 }, { "name": "Camera", "id": 6 }, { "name": "Doorlock", "id": 7 }, { "name": "Temperature Sensor", "id": 17 }, { "name": "Light Sensor", "id": 18 } ], "ir": 0, "irtx": "", "loadtime": 1486323317, "dataversion": 323321469, "state": -1, "comment": "" }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
  }

  ngOnInit(){
    this.loginprovider1.roomJson().subscribe(
      data => {console.log(data);
      this.response = data;
      this.response = JSON.parse(this.response._body);
      this.response1 = this.response;
      console.log("databaadka", this.response1.rooms);
      });
  }

 ionViewDidEnter() {
        console.log("dfasdfasdfasdfadsfadsfadsfadsfadsfdsafa");
      this.loginprovider1.roomJson().subscribe(
      data => {console.log(data);
      this.response = data;
      this.response = JSON.parse(this.response._body);
      this.response1 = this.response;
      console.log("databaadka", this.response1.rooms);
      }); 

      
      // You can execute what you want here and it will be executed right before you enter the view
    }
ionViewWillEnter(){
  console.log('ionViewWillEnter RoomsPage');
}

ionViewWillLeave(){
  console.log('ionViewWillLeave RoomsPage');
}

ionViewDidLeave(){
  console.log('ionViewDidLeave RoomsPage');
}

ionViewWillUnload(){
  console.log('ionViewWillUnload RoomsPage');
}

ionViewCanEnter(){
  console.log('ionViewCanEnter RoomsPage');
}

ionViewCanLeave(){
  console.log('ionViewCanLeave RoomsPage');
}
  showDevices(){
    this.loginprovider1.roomJson().subscribe(
      data => {console.log(data);
      this.response = data;
      });
  }

  clickOnRoom(id){
    console.log(id);
    console.log(this.mushrooms);
    this.appCtrl.getRootNav().push(DevicesPage, {
      'id': id
    });
  }

  // onDevice(evt,name){
  //   var switchValue;
  //   console.log(evt.checked,name);
  //   // var ipAddress = localStorage.getItem('ipAddress');
  //   // console.log(ipAddress);
  
  //   if(evt.checked == true){
  //     switchValue = "1";
  //     console.log("sdfasdf",switchValue)
  //   }
  //   if(evt.checked == false){
  //     switchValue = "0";
  //   }

  //   this.loginprovider1.switchOn(switchValue, name).subscribe(
  //     data => {console.log(data);
  //     //this.response = data;
  //   })
  // }
}
