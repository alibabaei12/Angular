import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm} from '@angular/forms';
import { DbConnectService } from 'src/app/shared/db-connect.service';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  addRecipe(nf : NgForm)
  {
    //console.log("recipe added", nf.value);
    this.db.addRecipeToDB(nf.value);
  }
  constructor(private db: DbConnectService) {}
  lodedPosts : any[] = [];

  loadRecipe()
  {
    this.db.loadRecipeFromDB().subscribe(
      posts=>{this.lodedPosts= posts;
      console.log(this.lodedPosts);}
    );

    
      
  
    
  }
  ngOnInit() {
  }

}
