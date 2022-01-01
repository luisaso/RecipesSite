import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe-class';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeNewComponent } from '../recipe-new/recipe-new.component';
import { AppComponent } from '../app.component';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private _recipeService: RecipeServiceService) {}
  public recipes?: any[];
  public addRecipeButton = new AppComponent();
  public recipeDetails = new RecipeDetailsComponent();
  public recipeNew = new RecipeNewComponent();

  @Output() onClickDetails = new EventEmitter<boolean>();
  @Output() onClickNew = new EventEmitter<boolean>();

  ngOnInit() {
    this.recipes = this._recipeService.getAllRecipes();
  }

  clickDetails(recipeId: string) {
    let dataToShow = this._recipeService.getRecipe(recipeId);
    this.recipeDetails.showDetails(dataToShow);
    this.onClickDetails.emit(true);
  }

  clickNew() {
    console.log('AQUYI');
    this.onClickNew.emit(true);
  }
}
