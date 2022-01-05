import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe-class';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  public detailRecipe = new Recipe();

  private subscription = new Subscription();

  constructor(private _recipeService: RecipeServiceService) {}

  ngOnInit() {
    this.subscription;
    this.subscription = this._recipeService
      .onRecipeRefresh()
      .subscribe(
        (recipe) =>
          (this.detailRecipe = this._recipeService.getRecipe(recipe.id))
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
