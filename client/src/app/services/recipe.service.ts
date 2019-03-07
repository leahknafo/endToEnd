import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})



export class RecipeService {
  private data: BehaviorSubject<any[]>;
  private curretSubscription: Subscription;
  constructor(private httpClient: HttpClient) {
    this.data = new BehaviorSubject<any[]>([]);

    setInterval(() => {
      if (this.curretSubscription && !this.curretSubscription.closed) {
        this.curretSubscription.unsubscribe();
      }

      this.curretSubscription = this.httpClient.get<any[]>(environment.serverUrl+'recipe').subscribe(a => {
        this.data.next(a);
      })

    }, 2 * 1000)
   }
  
  // post(Recipe: Recipe): Observable<object> {
  //       return this.httpClient.post('http://localhost:8888/recipe', Recipe, );
  //      }
  //      get(): Observable<object> {
  //       return this.httpClient.get('http://localhost:8888/recipe');
  //      }
  get(): Observable<any[]> {
    return this.data;
  }

  post(Recipe: Recipe): Observable<object> {
    return this.httpClient.post<any[]>(environment.serverUrl+'recipe', Recipe)
  }
}
