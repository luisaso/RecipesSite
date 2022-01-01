import { Component } from '@angular/core';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeServiceService } from './recipe-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeServiceService],
})
export class AppComponent {
  title = 'RecipesSite';
  isDetails = false;
  isNew = false;

  public switchDetails(value: boolean) {
    this.isDetails = value;
    this.isNew = !value;
  }

  public switchNew(value: boolean) {
    this.isNew = value;
    this.isDetails = !value;
  }
}
