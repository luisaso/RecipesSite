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

  @Output() onClickDetails = new EventEmitter<boolean>();
  @Output() onClickNew = new EventEmitter<boolean>();

  ngOnInit() {
    this.recipes = this._recipeService.getAllRecipes();
  }

  clickDetails(recipeId: string) {
    console.log('DETAIL');
    let dataToShow = this._recipeService.getRecipe(recipeId);
    this._recipeService.changeRecipe(dataToShow);
    this.onClickDetails.emit(true);
  }

  clickNew() {
    console.log('NEW');
    this.onClickNew.emit(true);
  }
}
