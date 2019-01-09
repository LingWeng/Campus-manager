import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Floor} from '../../model/floor';
import {Room} from '../../model/room';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  private floorUrl = 'api/floors';
  private roomUrl = 'api/rooms';

  constructor(private http: HttpClient) { }


  getFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.floorUrl)
      .pipe(catchError(this.handleError('getFloors', [])));
  }

  getFloor(id: number): Observable<Floor> {
    const url = `${this.floorUrl}/${id}`;
    return this.http.get<Floor>(url).pipe(
      catchError(this.handleError<Floor>(`getFloor level=${id}`))
    );
  }

  getRoom(id: number ): Observable<Room> {
    const url = `${this.roomUrl}/${id}`;
    return this.http.get<Room>(url)
      .pipe(catchError(this.handleError<Room>(`getRoom name=${id}`)));
  }

  getRoomsByFloor(id: number): Observable<Room[]> {
    return this.http.get<Room[]>(`api/rooms/?floor=${id}`)
      .pipe(catchError(this.handleError('getRoomsByFloor', [])));
  }

  updateRoom(room: Room): Observable <any> {
    return this.http.post(this.roomUrl, room, httpOptions).pipe(
      catchError(this.handleError<any>('updateRoom'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
