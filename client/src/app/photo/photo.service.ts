import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PhotoService {
  listOfPhotos: Photo[] = [];

  constructor(private httpClient: HttpClient) {}

  getRandomPhoto(): Observable<Photo> {
    // Get from http service

    return this.httpClient.get<Photo>('api/photos').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable('Something bad happened; please try again later.');
  }
}
