import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Products } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public product: Products;
  public today = new Date();
  public jstoday = '';

  constructor(
    private _productService: ProductService,
    private _activatedRouteService: ActivatedRoute,
    private _routerService: Router
  ) { }


  ngOnInit() {
    this.loadProducts();
    this.jstoday = formatDate(this.today, 'yyyy-MM-ddThh:mm:ss', 'en-VI', '+0700');
  }

  loadProducts() {
    this._activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this._productService.getIdProduct(id).subscribe((product: Products) => {
        this.product = product;
      })
    })
  }

  onEditProduct() {
    this._productService.editProductService(this.product).subscribe(data => {
      this._routerService.navigate(['/admin']);
    })
  }

  onSubmit(frmEditProduct) {
    if (frmEditProduct.valid) {
      this.onEditProduct();
    }
    else {
      Swal.fire({
        type: 'error',
        title: "Can't add product",
        text: 'The fields required cannot be empty!!',
      })

    }
  }

}
