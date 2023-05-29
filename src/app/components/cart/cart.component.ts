import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  /**
   *
   */
  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  cartItems: CartItem[] = [];

  getList() {
    this.cartItems = this.cartService.getAll();
  }
}
