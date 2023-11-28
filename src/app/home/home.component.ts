import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]=[];
  constructor(private foodService:FoodService, private route:ActivatedRoute)
  {
        
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } 
      else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTags(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}


