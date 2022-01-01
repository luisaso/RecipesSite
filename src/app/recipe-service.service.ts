import { Injectable } from '@angular/core';
import data from 'src/data/recipes.json';
import { Recipe } from './recipe-class';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  constructor() {}

  getAllRecipes() {
    return data;
  }

  getRecipe(recipeId: string): Recipe {
    let dataFiltered = data.filter((r) => r.id === recipeId);
    let dataToShow = new Recipe(
      dataFiltered[0].id,
      dataFiltered[0].name,
      dataFiltered[0].source,
      dataFiltered[0].ingredients,
      dataFiltered[0].instructions,
      dataFiltered[0].tags
    );
    return dataToShow;
  }
}
