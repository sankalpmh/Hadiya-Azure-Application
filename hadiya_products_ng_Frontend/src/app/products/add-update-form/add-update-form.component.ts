import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { SingleProductResponseMapper } from 'src/app/utils/response-mappers';

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrls: ['./add-update-form.component.scss']
})
export class AddUpdateFormComponent implements OnInit {

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  protected isUpdate: boolean = false;
  protected product!: Product;

  productForm = this.fb.group({
    name: ["", Validators.compose([Validators.required, Validators.maxLength(400)])],
    price: ["", Validators.compose([Validators.required, Validators.min(0), Validators.max(1000000)])],
    currency: ["", Validators.required],
    imageURL: ["", Validators.required]
  })

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    if(productId){
      this.isUpdate = true;
      this.productService.getProductById(productId)
      .subscribe(response => {
        this.product = SingleProductResponseMapper(response.data);
        this.populate();
      });
    }
  }

  private populate(){
    this.productForm.controls['name'].setValue(this.product.getName());
    this.productForm.controls['price'].setValue(this.product.getPrice().toString());
    this.productForm.controls['currency'].setValue(this.product.getCurency());
    this.productForm.controls['imageURL'].setValue(this.product.getImageURL());
  }

  protected onSubmit() {
    if (this.productForm.value){
      
      if(this.isUpdate){
        const product = new Product(
          this.productForm.value.name ? this.productForm.value.name : this.product.getName(),
          this.productForm.value.price ? +this.productForm.value.price : this.product.getPrice(),
          this.productForm.value.currency ? this.productForm.value.currency : this.product.getCurency(),
          this.productForm.value.imageURL ? this.productForm.value.imageURL : this.product.getImageURL(),
          this.product.getId()
        )
        this.productService.updateProduct(product)
        .subscribe(response => {
          this.router.navigateByUrl('/');
        })
      }
      else{
        const product = new Product(
          this.productForm.value.name ? this.productForm.value.name : "",
          this.productForm.value.price ? +this.productForm.value.price : +"0",
          this.productForm.value.currency ? this.productForm.value.currency : "",
          this.productForm.value.imageURL ? this.productForm.value.imageURL : ""
        )
        this.productService.addProduct(product)
        .subscribe(response => {
          this.router.navigateByUrl('/');
        })
      }
      
    }
    
  }

}
