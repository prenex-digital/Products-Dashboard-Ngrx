import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get = (resource: string, queryParams?: HttpParams): Observable<any> => {
    return this.http.get(resource, { params: queryParams })
  }
}
