import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {routerResponse} from '../models/routerResponseModel';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  baseUri:string = `http://localhost:3000/api`;

  baseUriWA:string = `http://localhost:3000/apiWA`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/html'
    })
  }  
  routerUrl="";

  constructor( private http: HttpClient ) {
  }
   
    getRouterResponse(text): Observable<any> {
        return Observable.create((behaviorSubject: BehaviorSubject<any>) => {
        const requestData = {
          text:text
        };
        this.routerUrl= this.baseUri+"/getResponse";

        return this.http.post(this.routerUrl, requestData,this.httpOptions).subscribe(
          data => {
            behaviorSubject.next(data);
          }
        );
      });
    }

    getWAResponse(text): Observable<any> {
      return Observable.create((behaviorSubject: BehaviorSubject<any>) => {
      const requestData = {
        text:text
      };
      this.routerUrl= this.baseUriWA+"/getResponse";

      return this.http.post(this.routerUrl, requestData,this.httpOptions).subscribe(
        data => {
          behaviorSubject.next(data);
        }
      );
    });
  }
  }