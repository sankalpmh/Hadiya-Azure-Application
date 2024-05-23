import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsAPIResponseMapper } from 'src/app/utils/response-mappers';
import { Pagination, Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  protected products!: Product[];
  protected pagination!: Pagination;
  protected currentPage: number = 1;
  protected limit: number = 10;
  protected offset: number = 0;
  protected totalCount!: number;

  constructor(
    private productService: ProductsService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.fetchProducts(this.limit, this.offset);
  }

  private fetchProducts(limit: number, offset: number){
    this.productService.getAllProducts(limit, offset)
    .subscribe(response => {
      this.products = productsAPIResponseMapper(response.data.products);
      this.pagination = response.data.pagination;
      this.limit = this.pagination.limit;
      this.offset = this.pagination.offset;
      this.totalCount = this.pagination.totalRecordCount;
    })
  }

  protected deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(response => {
      this.fetchProducts(this.limit, this.offset);
    })
    
  }

  protected editProduct(id: string){
    this.router.navigate(['forms/', id]);
  }

  protected pageChange(page: number){
    this.currentPage = page;
    this.offset = (this.currentPage - 1) * this.limit;
    this.fetchProducts(this.limit, this.offset);
  }

}
