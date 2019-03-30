import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public quantityProductByCart: number;
  

  constructor(private router: Router) { }
  
  checkLogin(){
    if(localStorage.getItem('userToken')){
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() {
    this.checkQuantityProductByCart();
    setTimeout(()=>{
      this.showListNav();
    },2900)
  }

  checkQuantityProductByCart(){
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart != null){
      this.quantityProductByCart = cart.length;
    }
  }

  showListNav(){
    $('#clickShowContentNav').click(function(){
      $('.bannerNavH2BG').show();
    })
    $('.bannerNavH2BG').click(function(){
      $('.bannerNavH2BG').hide();
    })
    $('#showNavList').click(function(){
      $('.bannerNavH2BG').show();
    })
  }

}
