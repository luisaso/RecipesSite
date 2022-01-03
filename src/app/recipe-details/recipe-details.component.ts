import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe-class';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  public _detailRecipe = new Recipe();
  public showRecipeDetails = false;

  subscription: Subscription = new Subscription();

  constructor(private _recipeService: RecipeServiceService) {}

  currentRecipe = new Recipe();

  get detailRecipe() {
    return this._detailRecipe;
  }

  set detailRecipe(value: Recipe) {
    this._detailRecipe = value;
  }

  ngOnInit(): void {
    this.subscription = this._recipeService.selectedRecipe$.subscribe(
      (recipe) => (this.detailRecipe = recipe)
    );
  }

  showDetails(recipe: Recipe) {
    this.showRecipeDetails = true;
    this._recipeService.changeRecipe(recipe);
  }
}
