import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly repositoryURL: string = "https://localhost:44337/api/";

    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

  constructor(private httpClient: HttpClient) {}

  GET(url){
    return this.httpClient.get(this.repositoryURL + url , this.httpOptions);
  }

  POST(url, data){
    return this.httpClient.post(this.repositoryURL + url, data , this.httpOptions);
  }
  
  PUT(url, data){
    return this.httpClient.put(this.repositoryURL + url, data , this.httpOptions);
  }

  DELETE(url, id){
    return this.httpClient.delete(this.repositoryURL + url +"/" + id + "/", this.httpOptions);
  }
}
