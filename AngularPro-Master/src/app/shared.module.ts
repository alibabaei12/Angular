import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownDirective} from './shared/dropdown.directive';
import { Recipe } from './shared/recipe.pipe';
import { ColorChanger } from './shared/colorchanger.directive';

@NgModule({
  declarations: [
    Recipe,
    ColorChanger,
    DropdownDirective
   
  ],
  exports: [
    Recipe,
    ColorChanger,
    DropdownDirective
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {}
