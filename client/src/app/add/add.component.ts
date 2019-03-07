import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  recipeModel: Recipe;
  ngOnInit() {

  }

  constructor(private recipeService: RecipeService) { 
    this.recipeModel=<Recipe>{};
  }
  addRecipe() {

    const subs=this.recipeService.post(this.recipeModel).subscribe(res => {
      console.log(res);
      subs.unsubscribe();
    });

  }
}