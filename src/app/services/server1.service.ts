import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Server1Service {

  // url = 'https://tstdrv2156523.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=901&deploy=1&id=23855&type=salesorder';
  url = 'app/site/hosting/restlet.nl?script=901&deploy=1&id=23855&type=salesorder';

  // url = 'https://jsonplaceholder.typicode.com/posts'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'OAuth realm="TSTDRV2156523",oauth_consumer_key="9d9b92d82c1d48e175f7fccd14e5ef74a20387fe3df53710fe364043dbf29a5f",oauth_token="80596fa05df6def9e6d25e58d328bfb02081933e4af82861a7b82d5501cb914e",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1583874126",oauth_nonce="9mUqJq",oauth_signature="21bEvd7ljW%2BXhpQ0EZ4E982LbXo%3D"'
    })
  };

  // httpOptions = {
  //   oauth: {
  //     consumer_key: '9d9b92d82c1d48e175f7fccd14e5ef74a20387fe3df53710fe364043dbf29a5f',
  //     consumer_secret: '5acf9ba8469d8f190754df9d1af413a056be4295bcb2ba2aeb7403a7daf7c18e',
  //     token: '80596fa05df6def9e6d25e58d328bfb02081933e4af82861a7b82d5501cb914e',
  //     token_secret: 'ad92afacbb5ee51793e6dd2fc2715f5d57b6696c1e37d2261ba66d47b9aa444a',
  //     realm: "TSTDRV2156523"
  //   }
  // }

  constructor(private _http:HttpClient) { }

  getJson(){
    let headers=new HttpHeaders();
    headers=headers.append('consumer_key','9d9b92d82c1d48e175f7fccd14e5ef74a20387fe3df53710fe364043dbf29a5f');
    headers=headers.append('consumer_secret','5acf9ba8469d8f190754df9d1af413a056be4295bcb2ba2aeb7403a7daf7c18e');
    headers=headers.append('token','80596fa05df6def9e6d25e58d328bfb02081933e4af82861a7b82d5501cb914e');
    headers=headers.append('token_secret','ad92afacbb5ee51793e6dd2fc2715f5d57b6696c1e37d2261ba66d47b9aa444a');
    headers=headers.append('realm','TSTDRV2156523');
    headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headers.append('Access-Control-Allow-Credentials', 'false');


    return this._http.get(this.url,{headers});

    
  }
}
