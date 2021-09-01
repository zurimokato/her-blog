import { Injectable } from '@angular/core';
import {Hero} from '../class/hero';
import {HEROES} from '../class/mock-heroes';
import { Observable, of } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';


const httpOptions={
  headers:new HttpHeaders({
    'consumer_key':'9d9b92d82c1d48e175f7fccd14e5ef74a20387fe3df53710fe364043dbf29a5f',
    'consumer_secret':'5acf9ba8469d8f190754df9d1af413a056be4295bcb2ba2aeb7403a7daf7c18e',
    'token':'80596fa05df6def9e6d25e58d328bfb02081933e4af82861a7b82d5501cb914e',
    'token_secret':'ad92afacbb5ee51793e6dd2fc2715f5d57b6696c1e37d2261ba66d47b9aa444a',
    'realm':'TSTDRV2156523'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url='https://tstdrv2156523.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=901&deploy=1&id=23855&type=salesorder';

  constructor(private _http:HttpClient) { }
  getHeroes():Observable<Hero[]>{
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  registraHeroe(hero:Hero){
    HEROES.push(hero);
  }

  getData():Observable<any>{
    let headers=new HttpHeaders();
    headers=headers.append('Access-Control-Allow-Origin','*');
    headers=headers.append('Access-Control-Allow-Headers','Content-Type');
    headers=headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    headers=headers.append('consumer_key','9d9b92d82c1d48e175f7fccd14e5ef74a20387fe3df53710fe364043dbf29a5f');
    headers=headers.append('consumer_secret','5acf9ba8469d8f190754df9d1af413a056be4295bcb2ba2aeb7403a7daf7c18e');
    headers=headers.append('token','80596fa05df6def9e6d25e58d328bfb02081933e4af82861a7b82d5501cb914e');
    headers=headers.append('token_secret','ad92afacbb5ee51793e6dd2fc2715f5d57b6696c1e37d2261ba66d47b9aa444a');
    headers=headers.append('realm','TSTDRV2156523');
    headers.append('Accept', 'application/json');
   
     
    return this._http.get(this.url,{headers});
  }

}
