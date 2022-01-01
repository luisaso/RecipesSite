import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-class';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  public _detailRecipe = new Recipe();
  public showRecipeDetails = false;

  constructor() {}

  get detailRecipe() {
    return this._detailRecipe;
  }

  set detailRecipe(value: Recipe) {
    this._detailRecipe = value;
  }

  ngOnInit(): void {}

  showDetails(recipe: Recipe) {
    this.showRecipeDetails = true;
    this.detailRecipe = recipe;
    console.log(this.detailRecipe);
  }
}
