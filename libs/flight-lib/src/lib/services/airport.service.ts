import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  apiUrl = 'http://www.angular.at/api/airport';

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl).pipe(map((airports) => []));
  }
}
