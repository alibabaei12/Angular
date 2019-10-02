import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbConnectService {

  constructor(private http: HttpClient) {}

  addRecipeToDB(recipe: any)
  {
    //console.log("Recipe has been added to DB");
    this.http.post('https://ali-tcs.firebaseio.com/recipe.json', recipe).subscribe(mydata=>{
      console.log(mydata);
        })

  }

  loadRecipeFromDB()
  {
    // console.log("loaded");
    // this.http.get('https://ali-tcs.firebaseio.com/recipe.json/').subscribe(mydata=>{
    //   console.log(mydata);
    //     });

    return this.http
    .get(
      'https://ali-tcs.firebaseio.com/recipe.json'
    )
    .pipe(
      map(responseData => {
        const postsArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }
}
