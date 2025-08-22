import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Hotel {
  hotelId: number;
  name: string;
  address: string;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  payload: T;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private baseUrl = 'http://localhost:8080/api/v1/hotels';
  private cache: ApiResponse<Hotel[]> | null = null;

  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<ApiResponse<Hotel[]>> {
    if (this.cache) {
      return of(this.cache);
    }
    return this.http
      .get<ApiResponse<Hotel[]>>(this.baseUrl)
      .pipe(tap((res) => (this.cache = res)));
  }

  clearCache() {
    this.cache = null;
  }
}
