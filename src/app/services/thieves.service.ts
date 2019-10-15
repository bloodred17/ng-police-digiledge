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

  deleteThiefFromApi(_id: string){
    // return this.http.delete(`http://http://localhost:3000/api/thieves/${_id}`, {
    return this.http.delete(`http://localhost:3000/api/thieves/5da4263ff746ce4114c211b7`, {
      responseType: 'json'
    }).pipe(
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }


}
