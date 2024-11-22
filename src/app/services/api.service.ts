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
    'x-rapidapi-key': '99eecdfa58msh5054db80e1cc2a4p1b0c87jsn8ad641b29b85',
    'x-rapidapi-host': 'popular-vehicles-api.p.rapidapi.com'
  });
  
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}