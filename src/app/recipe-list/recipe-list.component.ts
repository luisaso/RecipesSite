import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeNewComponent } from '../recipe-new/recipe-new.component';
import { AppComponent } from '../app.component';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe-class';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private _recipeService: RecipeServiceService) {}
  public recipes!: Recipe[];
  public addRecipeButton = new AppComponent();
  public recipeDetails = new RecipeDetailsComponent(this._recipeService);
  public recipeNew = new RecipeNewComponent(this._recipeService);

  @Output() onClickDetails = new EventEmitter<boolean>();
  @Output() onClickNew = new EventEmitter<boolean>();

  ngOnInit() {
    this.recipes = this._recipeService.getAllRecipes();
  }

  clickDetails(recipeId: string) {
    console.log('DETAIL');
    let dataToShow = this._recipeService.getRecipe(recipeId);
    this.onClickDetails.emit(true);
    this.recipeDetails.showDetails(dataToShow);
  }

  clickNew() {
    console.log('NEW');
    this.onClickNew.emit(true);
  }
}
