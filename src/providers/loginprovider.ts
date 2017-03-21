import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Loginprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginprovider {

  constructor(public http: Http) {
    console.log('Hello Loginprovider Provider');
  }
login(username, password){
    if(username == 'sud@gmail.com' && password == 'sud1234'){
      //localStorage.clear();
      return "success";
    }
  else{
    return "failure";
  }
    
  }

roomJson(){
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     let options = new RequestOptions({ headers: headers });
    // let body = 'userName='+username+'&userPass='+password;
    // console.log(body);
     let ip_address = localStorage.getItem('ipAddress');
     console.log(ip_address);
     let url = 'http://'+ip_address+':3480/data_request?id=sdata&output_format=json';
     // let url = 'http://localhost:8000/getJson';
    //  let url = 'http://192.168.0.106:8000/getJson';
     console.log("url", url);
    return this.http.get(url, options)
    .map(res => res);

}

switchOn(switchValue, id){
  console.log("switchValue", switchValue);
  console.log("id", id);
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  let ip_address = localStorage.getItem('ipAddress');
  let url = 'http://'+ip_address+':3480/data_request?id=action&output_format=json&DeviceNum='+id+'&serviceId=urn:upnp-org:serviceId:SwitchPower1&action=SetTarget&newTargetValue='+switchValue;
  console.log(url);
  return this.http.get(url, options)
    .map(res => res);
  }

 dimmable(value, id){
   console.log("switchValue", value);
  console.log("id", id);
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  let options = new RequestOptions({ headers: headers });
  let ip_address = localStorage.getItem('ipAddress');
  //let url = 'http://'+ip_address+':3480/data_request?id=action&output_format=json&DeviceNum='+id+'&serviceId=urn:upnp-org:serviceId:SwitchPower1&action=SetTarget&newTargetValue='+value;
  let url = 'http://'+ip_address+':3480/data_request?id=action&output_format=json&DeviceNum='+id+'&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget='+value;
  console.log(url);
  return this.http.get(url, options)
    .map(res => res);
 }
}
