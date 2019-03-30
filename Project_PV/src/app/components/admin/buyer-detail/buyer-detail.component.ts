import { Component, OnInit} from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Buyers } from 'src/app/models/buyers.model';
@Component({
  selector: 'app-buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.css']
})
export class BuyerDetailComponent implements OnInit{
  public buyerDetail: Buyers = {};
  constructor(private checkoutService: CheckoutService,
              private activatedRouteService: ActivatedRoute) { }

  loadBuyerDetail() {
    this.activatedRouteService.params.subscribe((data: Params) => {
      let id = data['id'];
      this.checkoutService.buyerDetail(id).subscribe(data => {
        this.buyerDetail = data;
        console.log(this.buyerDetail['_id']);
      })
    })
  }
  ngOnInit() {
    this.loadBuyerDetail();
  }

}
