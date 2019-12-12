import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This is simply a test.',
      'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg'),
    new Recipe('A Test Recipe 2',
      'This is simply a test.',
      'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg')
  ];

  @Output() recipeOut = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeOutEmitted(recipe: Recipe) {
    this.recipeOut.emit(recipe);
  }

}
