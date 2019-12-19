import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
        'Ham and Beans',
        'This is simply a test.',
        'https://www.willcookforsmiles.com/wp-content/uploads/2019/04/Ham-and-Bean-Soup-4-1.jpg',
        [
          new Ingredient('Ham', 5),
          new Ingredient('Beans', 3),
          new Ingredient('Tums', 73)
        ]),
    new Recipe(
        'Steak and Lobster',
        'This is simply a test.',
        'https://www.kansascitysteaks.com/dyn-images/pdp_hero/Lobster_and_KC_Strip-55a16081d2d6113e3a83fa4061c6b43e.jpg',
        [
          new Ingredient('Lobster', 3),
          new Ingredient('Steak', 2),
          new Ingredient('Garlic', 2)
        ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
