import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) { }

get(): Observable<any[]> {
  return this.socket.fromEvent("message");
}

post(Recipe: Recipe): Observable<any> {
  ;
  return of('success').pipe(map(() => {
    this.socket.emit("message", Recipe);
  }));
}
}