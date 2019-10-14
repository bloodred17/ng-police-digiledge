import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Thief } from '../interfaces/thief';

@Injectable({
  providedIn: 'root'
})
export class ThievesService {

  constructor(private http: HttpClient) { }

  fetchThievesFromApi(){
    return this.http.get<Thief[]>('http://localhost:3000/api/thieves', {
      responseType: 'json',
    })
      .pipe(
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
