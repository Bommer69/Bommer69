import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://DESKTOP-NIVNV3H:3000/api/data'; // URL API

  constructor(private http: HttpClient) {}

  // Hàm lấy dữ liệu từ API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
