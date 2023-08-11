import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from '../../shared/models/Tag';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class Food1Service {

  constructor() { }

  // Declare All methods or function that u want to use in other components

  // declare function with a return value after :
  getAll():Food[]{
    return [
      {
        id:1,
        name:'exa1',
        price:20,
        tags:['ds','sdsd'],
        favorite:true,
        stars:3.5,
        imageUrl:'ds',
        origins:['sda','fsd'],
        cookTime:'10-20' 
      },
      {
        id:2,
        name:'exa2',
        price:204,
        tags:['ddfg','vvd'],
        favorite:false,
        stars:4,
        imageUrl:'dsfdgdf',
        origins:['vccx','dsa'],
        cookTime:'20-25' 
      }
    ];
  }

  getAllFoodBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllFoodById(id:number):Food{
    return this.getAll().find(food=>food.id == id)!;
  }

  getAllTags():Tag[]{
    return [
      {name:'ex1',count:12},
      {name:'ex2',count:2},
      {name:'ex3',count:4},
    ]
  }
  getAllFoodByTag(tags:string):Food[]{
    return tags=="All"? this.getAll() : this.getAll().filter(food=>food.tags?.includes(tags));
  }


  private cart :Cart = new Cart();

  getCart() : Cart{
    return this.cart;
  }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item=>item.food.id == food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(){}
  changeQuantity(foodId:number,quantity:number){}


}
