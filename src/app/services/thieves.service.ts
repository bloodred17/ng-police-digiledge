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

  deleteThiefFromApi(id: string){
    // id = "5da4f05a2809745848f79ad5";
    const url = 'http://localhost:3000/api/thieves/'+id;
    console.log(url);
    return this.http.delete(url, {
    // return this.http.delete(`http://localhost:3000/api/thieves/5da4f0692809745848f79ad6`, {
    }).pipe(
      catchError(errorRes => {
        return throwError(errorRes);
      })
    ).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
  }

  postThiefToApi(thief: Thief){
    const url = 'http://localhost:3000/api/thieves';
    return this.http.post(url, thief, {
      observe: 'response'
    });
    // .subscribe(responseData => {
    //   console.log(responseData);
    // }, error => {
    //   console.log(error);
    // });
  }

  putThiefToApi(data, id){
    const url = 'http://localhost:3000/api/thieves/'+id;
    // return this.http.post(url, data, {
    return this.http.put('http://localhost:3000/api/thieves/5da5251810dc5150f8846269', data, {
      observe: 'response'
    }).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
  }
}
