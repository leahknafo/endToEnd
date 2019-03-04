import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ngOnInit() {

  }

  constructor(private recipeService: RecipeService) { }
  addRecipe(name, instruction) {
    const d = <Recipe>{
      name: name.value,
      instruction: instruction.value
    }

    return this.recipeService.post(d).subscribe(res => {
      console.log(res);
    });

  }
}