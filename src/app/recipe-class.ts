interface IRecipe {
  id: string;
  name: string;
  source: string;
  preptime: number;
  waittime: number;
  cooktime: number;
  servings: number;
  comments: string;
  calories: number;
  fat: number;
  satfat: number;
  carbs: number;
  fiber: number;
  sugar: number;
  protein: number;
  instructions: string;
  ingredients: string[];
  tags: string[];
}

export class Recipe implements IRecipe {
  public id: string;
  public name: string;
  public source: string;
  public preptime: number;
  public waittime: number;
  public cooktime: number;
  public servings: number;
  public comments: string;
  public calories: number;
  public fat: number;
  public satfat: number;
  public carbs: number;
  public fiber: number;
  public sugar: number;
  public protein: number;
  public instructions: string;
  public ingredients: string[];
  public tags: string[];

  constructor(
    idValue?: string,
    nameValue?: string,
    sourceValue?: string,
    ingredientsValue?: string[],
    instructionsValue?: string,
    tagsValue?: string[]
  ) {
    if (
      idValue &&
      nameValue &&
      sourceValue &&
      ingredientsValue &&
      instructionsValue &&
      tagsValue
    ) {
      this.id = idValue;
      this.name = nameValue;
      this.source = sourceValue;
      this.preptime = 0;
      this.waittime = 0;
      this.cooktime = 0;
      this.servings = 0;
      this.comments = '';
      this.calories = 0;
      this.fat = 0;
      this.satfat = 0;
      this.carbs = 0;
      this.fiber = 0;
      this.sugar = 0;
      this.protein = 0;
      this.instructions = instructionsValue;
      this.ingredients = ingredientsValue;
      this.tags = tagsValue;
    } else {
      this.id = '-99';
      this.name = '';
      this.source = '';
      this.preptime = 0;
      this.waittime = 0;
      this.cooktime = 0;
      this.servings = 0;
      this.comments = '';
      this.calories = 0;
      this.fat = 0;
      this.satfat = 0;
      this.carbs = 0;
      this.fiber = 0;
      this.sugar = 0;
      this.protein = 0;
      this.instructions = '';
      this.ingredients = [''];
      this.tags = [''];
    }
  }
}
