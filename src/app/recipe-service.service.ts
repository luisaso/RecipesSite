import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from 'src/data/recipes.json';
import { Recipe } from './recipe-class';

@Injectable()
export class RecipeServiceService {
  constructor() {}

  private allRecipes: Recipe[] = [new Recipe()];

  private selectedRecipeSource = new BehaviorSubject<Recipe>(new Recipe());

  onRecipeRefresh(): Observable<Recipe> {
    return this.selectedRecipeSource.asObservable();
  }

  changeRecipe(recipe: Recipe) {
    this.selectedRecipeSource.next(recipe);
  }

  getAllRecipes() {
    if (!localStorage.getItem('recipeDatabase')) {
      localStorage.setItem('recipeDatabase', JSON.stringify(data));
    }
    let recipeDatabase = JSON.parse(localStorage.getItem('recipeDatabase')!);
    for (let index = 0; index < recipeDatabase!.length; index++) {
      let newRecipe: Recipe = new Recipe(
        recipeDatabase[index].id,
        recipeDatabase[index].name,
        recipeDatabase[index].source,
        recipeDatabase[index].ingredients,
        recipeDatabase[index].instructions,
        recipeDatabase[index].tags
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
    localStorage.setItem('recipeDatabase', JSON.stringify(this.allRecipes));
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
