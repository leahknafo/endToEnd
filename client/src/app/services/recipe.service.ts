import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }
  post(Recipe: Recipe): Observable<object> {
        return this.httpClient.post('http://localhost:8888/recipe', Recipe);
       }
       get(): Observable<object> {
        return this.httpClient.get('http://localhost:8888/recipe');
       }
}
