import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm} from '@angular/forms';
@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  addRecipe(nf : NgForm)
  {
    console.log("recipe added", nf.value);
  }
  constructor() {}

  ngOnInit() {
  }

}
