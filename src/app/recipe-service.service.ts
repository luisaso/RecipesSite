import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import data from 'src/data/recipes.json';
import { Recipe } from './recipe-class';

@Injectable()
export class RecipeServiceService {
  constructor() {}

  private allRecipes: Recipe[] = [new Recipe()];

  private selectedRecipeSource = new ReplaySubject<Recipe>();
  selectedRecipe$ = this.selectedRecipeSource.asObservable();

  changeRecipe(recipe: Recipe) {
    this.selectedRecipeSource.next(recipe);
  }

  getAllRecipes() {
    for (let index = 0; index < data.length; index++) {
      let newRecipe: Recipe = new Recipe(
        data[index].id,
        data[index].name,
        data[index].source,
        data[index].ingredients,
        data[index].instructions,
        data[index].tags
      );

      this.allRecipes[index] = newRecipe;
    }
    return this.allRecipes;
  }

  findMaxId(): string {
    let maxId = -1;
    for (let index = 0; index < this.allRecipes.length; index++) {
      if (parseInt(this.allRecipes[index].id) > maxId) {
        maxId = parseInt(this.allRecipes[index].id);
      }
    }
    return String(maxId + 1);
  }

  addRecipe(
    name: string,
    source: string,
    ingredients: string[],
    instructions: string,
    tags: string[]
  ) {
    let id = this.findMaxId();
    let recipeToAdd = new Recipe(
      id,
      name,
      source,
      ingredients,
      instructions,
      tags
    );
    this.allRecipes.push(recipeToAdd);
  }

  getRecipe(recipeId: string): Recipe {
    let dataFiltered = this.allRecipes.filter((r) => r.id === recipeId);
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
