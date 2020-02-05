import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  shoppingItemToAdd = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    return this.ingredients.slice();
  }
}
