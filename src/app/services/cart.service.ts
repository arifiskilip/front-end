import { CartItem } from './../models/cartItem';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  add(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem: CartItem = { product: product, quantity: 1 };
      CartItems.push(cartItem);
    }
  }

  getAll(): CartItem[] {
    return CartItems;
  }
}
