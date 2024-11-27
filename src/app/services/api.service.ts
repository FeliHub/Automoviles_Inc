import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://popular-vehicles-api.p.rapidapi.com/rto/api/v1.0/popular_cars_bikes';
  private headers = new HttpHeaders({
    'x-rapidapi-key': '7088f73db2mshb6e1a58e54a2260p12c8c2jsn25dd5ce208d8',
    'x-rapidapi-host': 'popular-vehicles-api.p.rapidapi.com'
  });
  
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}