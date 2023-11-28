import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return [
      {name:'All',count:10},
      {name:'SlowFood',count:1},
      {name:'FastFood',count:1},
      {name:'Pasta',count:1}
    ]
  }

  getAll():Food[]{
    return [
     {
      id:1,
      name:'Pasta',
      price:700,
      tags:['Pasta','Lunch'],
      favorite:true,
      stars:4.5,
      imageUrl:'/assets/images/img1.jpg',
      origins:['india','us'],
      cookTime:'40-50'
     },
     {
      id:2,
      name:'dfs',
      price:500,
      tags:['SlowFood','Lunch'],
      favorite:false,
      stars:3.5,
      imageUrl:'/assets/images/img2.jpg',
      origins:['china','us'],
      cookTime:'20-30'
     },
     {
      id:3,
      name:'dffdvcb',
      price:100,
      tags:['SlowFood','Lunch'],
      favorite:false,
      stars:1.5,
      imageUrl:'/assets/images/img3.jpg',
      origins:['india','nepal'],
      cookTime:'10-20'
     },
     {
      id:4,
      name:'were',
      price:600,
      tags:['SlowFood','Lunch'],
      favorite:true,
      stars:3.5,
      imageUrl:'/assets/images/img4.jpg',
      origins:['nepal','china'],
      cookTime:'23-54'
     },
     {
      id:5,
      name:'vbc',
      price:50,
      tags:['SlowFood','Lunch'],
      favorite:false,
      stars:3.4,
      imageUrl:'/assets/images/img5.jpg',
      origins:['korea','us'],
      cookTime:'25-35'
     },
     {
      id:6,
      name:'qwee',
      price:250,
      tags:['FastFood','Dinner'],
      favorite:false,
      stars:4.2,
      imageUrl:'/assets/images/img6.jpg',
      origins:['korea','india'],
      cookTime:'10-40'
     }
    ]
  }

  getAllFoodsByTags(tag:string):Food[]{
    return tag=="All" ? this.getAll() : this.getAll().filter(food=> food.tags?.includes(tag));
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    console.log(searchTerm);
    return this.getAll().filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

}
