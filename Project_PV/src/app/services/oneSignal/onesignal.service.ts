import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';

const url = `https://onesignal.com/api/v1/notifications`;
const token: string = "ZjM3NTRlNWUtMGY4Zi00Njk1LWE4NTQtMzRlY2QyMTExZTA4";

@Injectable({
  providedIn: 'root'
})

export class OnesignalService {

  public headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = this.setHeaders();
  }

  setHeaders(): HttpHeaders {
    const header = new HttpHeaders();
    return header.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', 'Basic NGQ5NDE5M2QtYTk0OC00MTM4LWFmN2QtMjYyMzVkYTFlYzI4');
  }

  sendMessesageToAdmin(messesage: {}): Observable<any> {
    return this.httpClient.post(url, messesage, { headers: this.setHeaders() })
      .pipe(map(rer => rer), catchError(error => this.errorHandler(error)));
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    if (error.status >= 500) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '500 Internal Server Error, please try agian later!',
        footer: '<a href>Why do I have this issue?</a>'
      });
    } else if (error.status === 401 && error.statusText === 'UNAUTHORIZED') {
      localStorage.removeItem('userToken');
    } else if (error.status === 404) {
      console.log('page-not-found')
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Email or password is wrong!',
      });
    }
    return throwError(error);
  }

}