import { Component, OnInit} from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { Buyers } from 'src/app/models/buyers.model';
@Component({
  selector: 'app-list-buyer',
  templateUrl: './list-buyer.component.html',
  styleUrls: ['./list-buyer.component.css']
})
export class ListBuyerComponent implements OnInit{
  public listBuyer: Buyers= {};
  public qtyProductAc: number;

  constructor(
    private checkoutService: CheckoutService,
  ) { }
  ngOnInit() {
    this.loadBuyerList();
  }
  loadBuyerList() {
    this.checkoutService.getListBuyer().subscribe(data => {
      this.listBuyer = data['docs'];
      this.qtyProductAc = data['docs'].length;
    })
  }
}
