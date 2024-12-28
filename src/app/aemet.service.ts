import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AemetService {
  private apiUrl = 'https://api.aemet.es/api/v1/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2xpdmVybGFmb250QGdtYWlsLmNvbSIsImp0aSI6IjlmZmQ0ZDgxLTIyYWYtNGQ3OC04NDVmLWVhNjMwMDBmODhiMSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzM1MzM5ODUwLCJ1c2VySWQiOiI5ZmZkNGQ4MS0yMmFmLTRkNzgtODQ1Zi1lYTYzMDAwZjg4YjEiLCJyb2xlIjoiIn0.34lcHzp1zk5dEWdboowW2nHlPVV4fLLRgTapOk_z_1E'; // Replace with the actual API endpoint

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}