import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  /**
   *
   */
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}
  products: Product[] = [];
  dataLoaded: boolean = false;
  filterText: string = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        console.log(this.getProductsByCategoryId(Number(params['categoryId'])));
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getAll().subscribe(
      (response) => {
        this.products = response.data;
        this.dataLoaded = true;
      },
      (err) => console.log(err)
    );
  }

  getProductsByCategoryId(categoryId: number) {
    this.productService
      .getProductsByCategoryId(categoryId)
      .subscribe((response) => {
        this.products = response;
        this.dataLoaded = true;
      });
  }

  addTocCart(product: Product) {
    this.cartService.add(product);
    this.toastrService.success('Başarılı', 'Başarılı');
  }
}
