import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  protected products!: Product[];

  constructor(private productService: ProductsService) {
    // this.products = this.productService.getAllProducts();
  }

  ngOnInit(): void {
  }

}
