import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Products } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { ItemCart } from 'src/app/models/itemCart.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { ProductCart } from 'src/app/models/productCart.model';

declare var $;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit{
  public showProduct: {};
  public item: {};
  public reload: Observable<ProductCart>

  constructor(
    private activateRoute: ActivatedRoute,
    public productService: ProductService,
    private spinner: NgxSpinnerService,
    private store: Store<ProductCart[]>
  ) { 
    this.reload = this.store.select('reload')
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    setTimeout(()=>{
      this.showProductDetail();
    },0)
    setTimeout(()=>{
      this.showTabImg()
    },2900)
  }

  //show product detail
  showProductDetail() {
    this.activateRoute.params.subscribe((data: Params) => {
      let id = data['id'];
      this.productService.getIdProductDetail(id).subscribe((item: Products) => {
        this.showProduct = item;
        console.log(this.showProduct['updatedAt'])
      })
    })
  }

  // side slick img
  showTabImg(){
    $('.tabImgDetail').addClass(function(index){
      return "tabImgDetail_" + index;
    });
    $('.buttonTabImgDetail').addClass(function(index){
      return "buttonTabImgDetail_" + index;
    });
    $('.buttonTabImgDetail_0').click(function(){
      $('.tabImgDetail_0').show();
      $('.tabImgDetail_1, .tabImgDetail_2, .tabImgDetail_3, .tabImgDetail_4, .tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_1').click(function(){
      $('.tabImgDetail_1').show();
      $('.tabImgDetail_0, .tabImgDetail_2, .tabImgDetail_3, .tabImgDetail_4, .tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_2').click(function(){
      $('.tabImgDetail_2').show();
      $('.tabImgDetail_0, .tabImgDetail_1, .tabImgDetail_3, .tabImgDetail_4, .tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_3').click(function(){
      $('.tabImgDetail_3').show();
      $('.tabImgDetail_0, .tabImgDetail_2, .tabImgDetail_1, .tabImgDetail_4, .tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_4').click(function(){
      $('.tabImgDetail_4').show();
      $('.tabImgDetail_0, .tabImgDetail_2, .tabImgDetail_3, .tabImgDetail_1, .tabImgDetail_5').hide();
    })
    $('.buttonTabImgDetail_5').click(function(){
      $('.tabImgDetail_5').show();
      $('.tabImgDetail_0, .tabImgDetail_2, .tabImgDetail_3, .tabImgDetail_4, .tabImgDetail_1').hide();
    })
  }

  // add to cart
  addToCart(id: string) {
    if (id) {
      this.item = {
        productCart: this.showProduct,
        quantity: 1
      };
      if (localStorage.getItem('cart') == null) {
        let cart = [];
        cart.push(JSON.stringify(this.item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for (var i = 0; i < cart.length; i++) {
          let item: ItemCart = JSON.parse(cart[i]);
          if (item.productCart['_id'] == id) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          cart.push(JSON.stringify(this.item));
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
          let item: ItemCart = JSON.parse(cart[index]);
          item.quantity += 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    }
    setTimeout(function () { window.location = window.location; }, 0);
  }

  contactTrackByFn(index, item){
    return item.id;
  }
}
