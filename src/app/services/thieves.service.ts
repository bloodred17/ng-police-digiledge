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
    const url = `http://localhost:3000/api/thieves/${_id}`;
    console.log(url);
    return this.http.delete(url, {
    // return this.http.delete(`http://localhost:3000/api/thieves/5da4f05a2809745848f79ad5`, {
      responseType: 'json'
    }).pipe(
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  postThiefToApi(thief: Thief){
    const url = 'http://localhost:3000/api/thieves';
    return this.http.post(url, thief, {
      observe: 'response'
    }).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
  }

}
