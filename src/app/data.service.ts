import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions1 = {
  headers: new HttpHeaders({ 'A': 'A' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'access-granting-header': 'access-granting-header' })
};

const httpOptions3 = {
  headers: new HttpHeaders({ 'B': 'B' })
};

const httpOptions4 = {
  headers: new HttpHeaders({ 'D': 'D' })
};

const httpOptions5 = {
  headers: new HttpHeaders({ 'E': 'E' })
};

const httpOptions6 = {
  headers: new HttpHeaders({ 'F': 'F' })
};

@Injectable()
export class DataService {
  public isLoading = new BehaviorSubject(false);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  public first(): Observable<any> {
    console.log('Call One')
    return this.http.get(`${this.apiUrl}`, httpOptions1);
  }

  public second(): Observable<any> {
    console.log('Call Two')
    return this.http.get(`${this.apiUrl}`, httpOptions2);
  }

  public third(): Observable<any> {
    console.log('Call Three')
    return this.http.get(`${this.apiUrl}`, httpOptions3);
  }

  public fourth(): Observable<any> {
    console.log('Call Four')
    return this.http.get(`${this.apiUrl}`, httpOptions4);
  }

  public fifth(): Observable<any> {
    console.log('Call Five')
    return this.http.get(`${this.apiUrl}`, httpOptions5);
  }

  public sixth(): Observable<any> {
    console.log('Call Six')
    return this.http.get(`${this.apiUrl}`, httpOptions6);
  }
}
