import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipe: Recipe[];

  constructor(private socketService: SocketService) { }
  
  ngOnInit() {
     this.socketService.get().subscribe(RecipeData => {
      this.recipe = <Recipe[]>RecipeData
  });

}
}





