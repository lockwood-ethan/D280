import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {

  constructor(private http: HttpClient) { }

  public getCountryData(countryId: any): Observable<any> {
    return this.http.get(`https://api.worldbank.org/v2/country/${countryId}?format=json`);
  }
}
