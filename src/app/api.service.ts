import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  Title = '';
  upload1Url = "null";
  upload2Url = "null";
  constructor(private _http: HttpClient) {}

  getPhotos() {
    return this._http.get('https://jsonplaceholder.typicode.com/photos');
  }

  saveData(data: any): Observable<any> {
    return this._http.post('https://jsonplaceholder.typicode.com/photos', data);
  }

  getTitle(){
    return this.Title;
  }
  setTitle(title: string) {
    this.Title = title;
  }
  getupload1() {
    return this.upload1Url;
  }
  setupload1(url: string) {
    this.upload1Url = url;
  }
  getupload2() {
    return this.upload2Url;
  }
  setupload2(url: string) {
    this.upload2Url = url;
  }
}
