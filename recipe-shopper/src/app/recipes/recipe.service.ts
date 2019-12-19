import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This is simply a test.',
      'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg'),
    new Recipe('A Test Recipe 2',
      'This is simply a test.',
      'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
