import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  fetch() {
    return [
      { 
        id: 'p1', seller_id: 's1', name: 'Denim Sofa', image: 'image_sofa.jpg',
        description: 'Lorem ipsum dolor sit amet', 
        price: 5000000, stock: 2, category_id: 'c1', created_on: Date.now(),
      },
      { 
        id: 'p2', seller_id: 's2', name: 'Large Canvas', image: 'image_canvas.jpg',
        description: 'consectetur adipiscing elit', 
        price: 20000, stock: 100, category_id: 'c2', created_on: Date.now(),
      },
      { 
        id: 'p3', seller_id: 's3', name: 'Nike Shoes', image: 'image_shoes.jpg',
        description: 'sed do eiusmod tempor incididunt', 
        price: 3000000, stock: 5, category_id: 'c3', created_on: Date.now(),
      },
      { 
        id: 'p4', seller_id: 's4', name: 'Adidas Shoes', image: 'image_shoes_2.jpg',
        description: 'aliquip ex ea commodo consequat', 
        price: 2000000, stock: 6, category_id: 'c4', created_on: Date.now(),
      },
    ]
  }

  fetchById(id: string) {
    return { 
      id: 'p1', seller_id: 's1', name: 'Denim Sofa', image: 'image_sofa.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat.`,
      price: 5000000, stock: 5, category_id: 'c1', created_on: Date.now(),
    };
  }
}
