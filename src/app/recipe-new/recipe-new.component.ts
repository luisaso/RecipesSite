import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css'],
})
export class RecipeNewComponent implements OnInit {
  constructor(private _recipeService: RecipeServiceService) {}

  public recipeName: string = '';
  public recipeSource: string = '';
  public recipeIngredients: string = '';
  public recipeInstructions: string = '';
  public recipeTags: string = '';

  ngOnInit(): void {}

  clickSave() {
    let recipeIngredientsArray = this.recipeIngredients.split(/,|, /);
    let recipeTagsArray = this.recipeTags.split(', ');

    this._recipeService.addRecipe(
      this.recipeName,
      this.recipeSource,
      recipeIngredientsArray,
      this.recipeInstructions,
      recipeTagsArray
    );
  }
}
