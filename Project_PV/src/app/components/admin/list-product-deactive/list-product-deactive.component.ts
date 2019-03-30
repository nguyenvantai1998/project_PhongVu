import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-product-deactive',
  templateUrl: './list-product-deactive.component.html',
  styleUrls: ['./list-product-deactive.component.css']
})
export class ListProductDeactiveComponent implements OnInit {

  public product: Products = {};
  public productDeactive: Products = {};
  public productView: Products[] = [];
  public productsTrail: any;
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProductDeactive();
  }

  loadProductDeactive() {
    this.productService.getAllProductDeactive().subscribe(data => {
      this.productDeactive = data;
    })
  }
  //remove item 
  removeById(_id: string) {
    const remove = this.productView.findIndex((e: Products) =>
      e['_id'] === _id
    );
    this.productView.splice(remove, 1);
  }

  //choose product active
  chooseActive(id: string) {
    this.productService.getIdProduct(id).subscribe((product: Products) => {
      this.product = product;
      this.productView.push(product);
      this.showhiden(id, this.productView);
    })
  }

  showhiden(id: string, productView) {
    var isDisable;
    for (var i = 0; i < productView.length; i++) {
      if (productView[i]._id == id) {
        isDisable = true;
      }
    };
    return isDisable;
  }

  //Active product
  onActive(productView) {
    for (var i = 0; i < this.productView.length; i++) {
      this.productService.getIdProduct(productView[i]._id).subscribe((product: Products) => {
        this.product = product;
        this.productService.activeProductService(this.product).subscribe(data => {
        });
      })
    }
    this.router.navigate(['/admin']);
  }


}
