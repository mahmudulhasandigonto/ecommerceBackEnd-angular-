import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  doPost(uri: string, objForPost: any) {
    return this.http.post(environment.baseUrl + uri + "/", objForPost, { responseType: 'text' as "json" })
  }

  doGet(uri: string) {
    console.log(environment.baseUrl + uri + "/");
    return this.http.get(environment.baseUrl + uri + "/");
  }

  doGetById(uri: string, id: any) {
    return this.http.get(environment.baseUrl + uri + "/" + id)
  }

  doDeleteById(uri: string, id: any) {
    return this.http.delete(environment.baseUrl + uri + "/" + id, { responseType: "text" as "json" });
  }

  doUpdate(uri: string, id: any, objForUpdate: any) {
    return this.http.put(environment.baseUrl + uri + "/" + id, objForUpdate, { responseType: "text" as "json" })
  }
}
