import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions1 = {
  headers: new HttpHeaders({ 'Q': 'Q' })
};

const httpOptions2 = {
  headers: new HttpHeaders({ 'Y': 'Y' })
};

const httpOptions8 = {
  headers: new HttpHeaders({ 'Y': 'Y' })
};
@Injectable()
export class CompService {
  public isLoading = new BehaviorSubject(false);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  public first(): Observable<any> {
    console.log('Comp 1 Call One')
    return this.http.get(`${this.apiUrl}`, httpOptions1);
  }

  public second(): Observable<any> {
    console.log('Comp 1 Call Two')
    return this.http.get(`${this.apiUrl}`, httpOptions2);
  }

  public eight(): Observable<any> {
    console.log('Comp 1 Call Eight')
    return this.http.get(`${this.apiUrl}`, httpOptions8);
  }
}
